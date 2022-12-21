import Head from 'next/head';
import React from 'react';
import AboutUs from 'src/components/about/AboutUs';
import Purpose from 'src/components/about/Purpose';
import Timeline from 'src/components/about/Timeline';
import Section from 'src/components/common/Section';
import MainLayout from 'src/components/layout/main'
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function SobreNos({ about }) {
  return (
    <main>

      <Head>
        <title>Sobre Nós - NefroSinos</title>
        <meta name="description" content="" />
        <meta property="og:image" content="/images/cover.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sobre Nós" />
        <meta property="og:url" content="https://nefrosinos.com.br/sobre-nos" />
      </Head>

      <Section pt="72" mt="72" id="sobre-nos">
        <AboutUs content={about.aboutUs} />
      </Section>

      <Section mt="200 120" id="proposito">
        <Purpose content={about.purpose} />
      </Section>

      <Section pt="147 96" mt="214 96" mb="200 136" id="linha-do-tempo">
        <Timeline content={about.timeline} />
      </Section>
    </main>
  )
}

SobreNos.layout =  MainLayout;
SobreNos.showContact = true;

export async function getStaticProps() {
  const about = await fetchAPI('sobre-nos');

  const layout = await getLayoutContent();

  return {
    props: {
      about,

      layout, // will only be used in `_app.js`
    },
    revalidate: 60,
  }
}