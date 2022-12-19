import React from 'react'
import AboutOurTeam from 'src/components/about/AboutOurTeam';
import AboutUs from 'src/components/about/AboutUs';
import OurTeam from 'src/components/about/OurTeam';
import Purpose from 'src/components/about/Purpose';
import Timeline from 'src/components/about/Timeline';
import Section from 'src/components/common/Section';
import MainLayout from 'src/components/layout/main'
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function SobreNos({ about, team }) {
  return (
    <main>
      <Section pt="72" mt="72">
        <AboutUs content={about.aboutUs} />
      </Section>

      <Section mt="200 120">
        <Purpose content={about.purpose} />
      </Section>

      <Section pt="147 96" mt="214 96">
        <Timeline content={about.timeline} />
      </Section>

      <Section mt="200 120">
        <OurTeam content={about.ourTeam} team={team} />
      </Section>

      <Section mt="200 136" mb="200 136">
        <AboutOurTeam content={about.aboutOurTeam} />
      </Section>
    </main>
  )
}

SobreNos.layout = MainLayout;
SobreNos.showContact = true;

export async function getStaticProps() {
  const about = await fetchAPI('sobre-nos');
  const team = await fetchAPI('equipe');

  const layout = await getLayoutContent();

  return {
    props: {
      about,
      team,

      layout, // will only be used in `_app.js`
    }
  }
}