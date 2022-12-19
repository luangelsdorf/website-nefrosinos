import React from 'react';
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import MainLayout from 'src/components/layout/main';
import ConservativeTreatment from 'src/components/services/ConservativeTreatment';
import Hemodiafiltration from 'src/components/services/Hemodiafiltration';
import Hemodialysis from 'src/components/services/Hemodialysis';
import Hero from 'src/components/services/Hero';
import HighlightedServices from 'src/components/services/HighlightedServices';
import InTransit from 'src/components/services/InTransit';
import Partners from 'src/components/services/Partners';
import PeritonealDialysis from 'src/components/services/PeritonealDialysis';
import Structure from 'src/components/services/Structure';
import Transplant from 'src/components/services/Transplant';
import WaterTreatment from 'src/components/services/WaterTreatment';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function Services({ services, faq, partners }) {
  return (
    <main>
      <Hero content={services.banner} />

      <Section mb="-164" id="servicos-destaque">
        <HighlightedServices content={services.highlighted} />
      </Section>

      <Section mt="160 120" id="dialise-em-transito">
        <InTransit content={services.inTransit} />
      </Section>

      <Section mt="160 80" id="diálise-peritoneal">
        <PeritonealDialysis content={services.peritonealDialysis} />
      </Section>

      <Section mt="160 80" id="hemodiafiltração">
        <Hemodiafiltration content={services.hemodiafiltration} />
      </Section>

      <Section mt="200 96" id="hemodiálise">
        <Hemodialysis content={services.hemodialysis} />
      </Section>

      <Section id="tratamento-conservador">
        <ConservativeTreatment content={services.conservative} />
      </Section>

      <Section mt="200 80" id="transplante">
        <Transplant content={services.transplant} />
      </Section>

      <Section mt="200 120" id="convenios">
        <Partners content={services.partners} partners={partners.partners} />
      </Section>

      <Section mt="200 136" id="estrutura">
        <Structure content={services.structure} />
      </Section>

      <Section mt="200 136" id="tratamento-agua">
        <WaterTreatment content={services.waterTreatment} />
      </Section>

      <Section mt="200 120" mb="200 120" id="faq">
        <FAQ content={faq} />
      </Section>
    </main>
  )
}

Services.layout = MainLayout;
Services.showContact = true;

export async function getStaticProps() {
  const services = await fetchAPI('servico');
  const faq = await fetchAPI('pergunta-frequente');
  const partners = await fetchAPI('parceiro')

  const layout = await getLayoutContent();

  return {
    props: {
      services,
      faq,
      partners,

      layout, // will only be used in `_app.js`
    },
    revalidate: 60,
  }
}