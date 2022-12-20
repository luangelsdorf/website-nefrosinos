import Head from 'next/head';
import React from 'react'
import Section from 'src/components/common/Section';
import MainLayout from 'src/components/layout/main';
import Partners from 'src/components/services/Partners';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function Convenios({ partners }) {
  return (
    <>

      <Head>
        <title>Convênios - NefroSinos</title>
        <meta name="description" content="" />
        <meta property="og:image" content="/images/cover.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Convênios" />
        <meta property="og:url" content="https://nefrosinos.com.br/convenios" />
      </Head>

      <Section mt="200 120" mb="200 120" id="convenios">
        <Partners content={partners} partners={partners.partners} />
      </Section>
    </>
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