import Head from 'next/head';
import React from 'react'
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import Address from 'src/components/contact/Address';
import ContactInfo from 'src/components/contact/ContactInfo';
import Hero from 'src/components/contact/Hero';
import Hours from 'src/components/contact/Hours';
import MainLayout from 'src/components/layout/main';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function Contato({ contact, faq, layout: { info } }) {
  return (
    <main>

      <Head>
        <title>Contato - NefroSinos</title>
        <meta name="description" content="" />
        <meta property="og:image" content="/images/cover.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contato" />
        <meta property="og:url" content="https://nefrosinos.com.br/contato" />
      </Head>

      <Hero info={info} />

      <Section className="bg-gray" id="endereco">
        <Address content={contact.location} info={info} />
      </Section>

      <Section pt="60 4" pb="200 144" className="bg-gray" id="info-contato">
        <ContactInfo content={contact.details} info={info} />
      </Section>

      <Section mt="-75" mb="160 120" id="horarios">
        <Hours info={info} />
      </Section>

      <Section mb="280 120" id="faq">
        <FAQ content={faq} />
      </Section>
    </main>
  )
}

Contato.layout = MainLayout;
Contato.showContact = false;

export async function getStaticProps() {
  const contact = await fetchAPI('contato');
  const faq = await fetchAPI('pergunta-frequente');

  const layout = await getLayoutContent();

  return {
    props: {
      contact,
      faq,

      layout,
    },
    revalidate: 60,
  }
}