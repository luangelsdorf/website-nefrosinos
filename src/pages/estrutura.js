import React from 'react'
import Section from 'src/components/common/Section';
import MainLayout from 'src/components/layout/main';
import Structure from 'src/components/services/Structure';
import WaterTreatment from 'src/components/services/WaterTreatment';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function Estrutura({ structure }) {
  return (
    <>
      <Section mt="200 136" id="estrutura">
        <Structure content={structure.structure} />
      </Section>
      <Section mt="200 136" mb="200 120" id="tratamento-agua">
        <WaterTreatment content={structure.waterTreatment} />
      </Section>
    </>
  )
}

Estrutura.layout = MainLayout;
Estrutura.showContact = true;

export async function getStaticProps() {
  const structure = await fetchAPI('estrutura');

  const layout = await getLayoutContent();

  return {
    props: {
      structure,

      layout, // will only be used in `_app.js`
    },
    revalidate: 60,
  }
}