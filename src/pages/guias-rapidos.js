import Head from 'next/head';
import React from 'react'
import Banner from 'src/components/common/Banner';
import Section from 'src/components/common/Section';
import Title from 'src/components/common/Title';
import Guide from 'src/components/guides/Guide';
import MainLayout from 'src/components/layout/main';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function QuickGuides({ content, layout: { info } }) {

  return (
    <main>

      <Head>
        <title>Guias Rápidos - NefroSinos</title>
        <meta name="description" content="" />
        <meta property="og:image" content="/images/cover.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Guias Rápidos" />
        <meta property="og:url" content="https://nefrosinos.com.br/guias-rapidos" />
      </Head>

      <Section pt="180 80" pb="120 80" style={{ backgroundColor: 'var(--blue)' }}>
        <div className="row">
          <div className="col-12">
            <div>
              <Title level={1} content={{ title: 'Guias Rápidos', overline: 'Suporte' }} align="center" variant="dark" />
            </div>
          </div>
        </div>
      </Section>

      {
        content.guides.map(guide => (
          <Section key={guide.id} mt="140 80" mb="140 80" id="calculadora">
            <Guide content={guide} />
          </Section>
        ))
      }
    </main>
  )
}

QuickGuides.layout = MainLayout;
QuickGuides.showContact = false;

export async function getStaticProps() {
  const content = await fetchAPI('guia-rapido');

  const layout = await getLayoutContent();

  return {
    props: {
      content,

      layout,
    },
    revalidate: 60,
  }
}