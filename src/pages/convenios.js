import React from 'react'
import Section from 'src/components/common/Section';
import MainLayout from 'src/components/layout/main';
import Partners from 'src/components/services/Partners';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function Convenios({ partners }) {
  return (
    <Section mt="200 120" mb="200 120" id="convenios">
      <Partners content={partners} partners={partners.partners} />
    </Section>
  )
}

Convenios.layout = MainLayout;
Convenios.showContact = true;

export async function getStaticProps() {
  const partners = await fetchAPI('parceiro');

  const layout = await getLayoutContent();

  return {
    props: {
      partners,

      layout, // will only be used in `_app.js`
    },
    revalidate: 60,
  }
}