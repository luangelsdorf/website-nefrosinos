import Head from 'next/head';
import { useEffect } from 'react';
import fetchAPI from 'src/utils/fetch';
import Section from 'src/components/common/Section';
import Title from 'src/components/common/Title';
import Image from 'next/future/image';
import Collage from 'src/components/common/Collage';
import HeroSlider from 'src/components/home/HeroSlider';
import Service from 'src/components/home/Service';
import AboutUs from 'src/components/home/AboutUs';
import OurTeam from 'src/components/home/OurTeam';
import Partners from 'src/components/home/Partners';
import Structure from 'src/components/home/Structure';
import Contact from 'src/components/layout/Contact';

export default function Home({ home, partners, team, footer, info }) {

  return (
    <>
      <main>
        {/* <HeroSlider content={home.bannerSlider} height={880} /> */}
        {/* <Section>
          <Service content={home.service} />
        </Section> */}
        {/* <Section>
          <AboutUs content={home.aboutUs} />
        </Section> */}
        {/* <Section pt="96" >
          <OurTeam content={home.ourTeam} team={team} />
        </Section> */}
        {/* <Section>
          <Partners content={home.partners} partners={partners} length={6} />
        </Section> */}
        {/* <Section>
          <Structure content={home.structure} />
        </Section> */}
        <Section pb="108">
          <Contact content={footer} info={info} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const home = await fetchAPI('home-site');
  const partners = await fetchAPI('parceiro');
  const team = await fetchAPI('equipe');
  const footer = await fetchAPI('rodape');
  const info = await fetchAPI('info');

  return {
    props: {
      home,
      partners,
      team,
      footer,
      info,
    }
  }
}