import Head from 'next/head';
import React from 'react'
import Section from 'src/components/common/Section';
import Calculator from 'src/components/home/Calculator';
import MainLayout from 'src/components/layout/main';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function Calculadora({ contact, faq, home, layout: { info } }) {
  return (
    <main>

      <Head>
        <title>Calculadora da Função Renal - NefroSinos</title>
        <meta name="description" content="" />
        <meta property="og:image" content="/images/cover.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Calculadora" />
        <meta property="og:url" content="https://nefrosinos.com.br/calculadora" />
      </Head>

      <Section mt="180" mb="180" id="calculadora">
        <Calculator content={home.referenceTable} />
      </Section>
    </main>
  )
}

Calculadora.layout = MainLayout;
Calculadora.showContact = false;

export async function getStaticProps() {
  const contact = await fetchAPI('contato');
  const faq = await fetchAPI('pergunta-frequente');
  const home = await fetchAPI('home-site');

  const layout = await getLayoutContent();

  return {
    props: {
      contact,
      faq,
      home,

      layout,
    },
    revalidate: 60,
  }
}