import Head from 'next/head';
import React from 'react'
import AboutOurTeam from 'src/components/about/AboutOurTeam';
import OurTeam from 'src/components/about/OurTeam';
import Section from 'src/components/common/Section';
import MainLayout from 'src/components/layout/main';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function Equipe({ team }) {
  return (
    <>

      <Head>
        <title>Nossa Equipe - NefroSinos</title>
        <meta name="description" content="" />
        <meta property="og:image" content="/images/cover.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nossa Equipe" />
        <meta property="og:url" content="https://nefrosinos.com.br/equipe" />
      </Head>

      <Section mt="96 80" id="equipe">
        <OurTeam content={team} team={team} />
      </Section>
      <Section mt="200 136" mb="200 136" id="sobre-a-equipe">
        <AboutOurTeam content={team.aboutOurTeam} />
      </Section>
    </>
  )
}

Equipe.layout = MainLayout;
Equipe.showContact = true;

export async function getStaticProps() {
  const team = await fetchAPI('equipe');

  const layout = await getLayoutContent();

  return {
    props: {
      team,

      layout, // will only be used in `_app.js`
    },
    revalidate: 60,
  }
}