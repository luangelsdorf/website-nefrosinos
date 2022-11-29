import React from 'react'
import AboutOurTeam from 'src/components/about/AboutOurTeam';
import AboutUs from 'src/components/about/AboutUs';
import OurTeam from 'src/components/about/OurTeam';
import Purpose from 'src/components/about/Purpose';
import Timeline from 'src/components/about/Timeline';
import Section from 'src/components/common/Section';
import TeamCarousel from 'src/components/common/TeamCarousel';
import MainLayout from 'src/components/layout/Main'
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function SobreNos({ about, team }) {
  return (
    <main>
      <h1 style={{ height: '300vh' }}>About Page</h1>
      {/* <Section>
        <AboutUs content={about.aboutUs} />
      </Section> */}
      {/* <Section>
        <Purpose content={about.purpose} />
      </Section> */}
      {/* <Section pt="147">
        <Timeline content={about.timeline} />
      </Section> */}
      {/* <Section>
        <OurTeam content={about.ourTeam} team={team} />
      </Section> */}
      {/* <Section>
        <AboutOurTeam content={about.aboutOurTeam} />
      </Section> */}
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