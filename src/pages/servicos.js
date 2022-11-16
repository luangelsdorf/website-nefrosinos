import React from 'react';
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import MainLayout from 'src/components/layout/Main';
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
      <h1 style={{height: '300vh'}}>Services Page</h1>
      {/* <Hero content={services.banner} /> */}
      {/* <Section>
        <HighlightedServices content={services.highlighted} />
      </Section> */}
      {/* <Section>
        <InTransit content={services.inTransit} />
      </Section> */}
      {/* <Section>
        <PeritonealDialysis content={services.peritonealDialysis} />
      </Section> */}
      {/* <Section>
        <Hemodiafiltration content={services.hemodiafiltration} />
      </Section> */}
      {/* <Section>
        <Hemodialysis content={services.hemodialysis} />
      </Section> */}
      {/* <Section>
        <ConservativeTreatment content={services.conservative} />
      </Section> */}
      {/* <Section>
        <ConservativeTreatment content={services.conservative} />
      </Section> */}
      {/* <Section>
        <Transplant content={services.transplant} />
      </Section> */}
      {/* <Section>
        <Partners content={services.partners} partners={partners.partners} />
      </Section> */}
      {/* <Section>
        <Structure content={services.structure} />
      </Section> */}
      {/* <Section>
        <WaterTreatment content={services.waterTreatment} />
      </Section> */}
      {/* <Section>
        <FAQ content={faq} />
      </Section> */}
    </main>
  )
}

Services.layout = MainLayout;

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
    }
  }
}