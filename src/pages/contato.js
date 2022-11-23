import React from 'react'
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import Address from 'src/components/contact/Address';
import ContactInfo from 'src/components/contact/ContactInfo';
import Hero from 'src/components/contact/Hero';
import MainLayout from 'src/components/layout/Main';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function Contato({ contact, faq, layout: { info } }) {
  return (
    <main>
      <h1 style={{ height: '300vh' }}>Contact Page</h1>
      {/* <Hero info={info} /> */}
      {/* <Section>
        <Address content={contact.location} info={info} />
      </Section> */}
      {/* <Section pb="200" mb="160" className="bg-gray">
        <ContactInfo content={contact.details} info={info} />
      </Section> */}
      {/* <Section>
        <FAQ content={faq} />
      </Section> */}
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