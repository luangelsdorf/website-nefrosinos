import Head from 'next/head';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';
import MainLayout from 'src/components/layout/Main';
import Section from 'src/components/common/Section';
import HeroSlider from 'src/components/home/HeroSlider';
import Service from 'src/components/home/Service';
import AboutUs from 'src/components/home/AboutUs';
import OurTeam from 'src/components/home/OurTeam';
import Partners from 'src/components/home/Partners';
import Structure from 'src/components/home/Structure';

export default function Home({ home, partners, team }) {

  return (
    <main>
      <HeroSlider content={home.bannerSlider} height={880} />
      <div style={{ backgroundColor: 'var(--white)' }}>
        <Section mt="-100">
          <Service content={home.service} />
        </Section>
        <Section mt="140">
          <AboutUs content={home.aboutUs} />
        </Section>
        <Section pt="96" mt="184">
          <OurTeam content={home.ourTeam} team={team} />
        </Section>
        <Section mt="200">
          <Partners content={home.partners} partners={partners} length={6} />
        </Section>
        <Section mt="200">
          <Structure content={home.structure} />
        </Section>
      </div>
    </main>
  )
}

Home.layout = MainLayout;
Home.showContact = true;

export async function getStaticProps() {
  const home = await fetchAPI('home-site');
  const partners = await fetchAPI('parceiro');
  const team = await fetchAPI('equipe');

  const layout = await getLayoutContent();

  return {
    props: {
      home,
      partners,
      team,

      layout, // will only be used in `_app.js`
    }
  }
}