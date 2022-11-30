import React from 'react'
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import Address from 'src/components/contact/Address';
import ContactInfo from 'src/components/contact/ContactInfo';
import Hero from 'src/components/contact/Hero';
import Hours from 'src/components/contact/Hours';
import MainLayout from 'src/components/layout/Main';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function Contato({ contact, faq, layout: { info } }) {
  return (
    <main>
      <Hero info={info} />
      <Section mt="-100" className="bg-gray">
        <Address content={contact.location} info={info} />
      </Section>
      <Section pt="120" pb="200" className="bg-gray">
        <ContactInfo content={contact.details} info={info} />
      </Section>
      <Section mt="-75" mb="160">
        <Hours info={info} />
      </Section>
      <Section mb="280">
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
    }
  }
}