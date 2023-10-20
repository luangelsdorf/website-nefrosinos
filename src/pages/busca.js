import Head from 'next/head';
import React from 'react';
import FilteredPosts from 'src/components/categories/FilteredPosts';
import Section from 'src/components/common/Section';
import MainLayout from 'src/components/layout/main';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function SearchResults({ searchTerm, resultPosts }) {
  return (
    <main>

      <Head>
        <title>Resultados da Busca - NefroSinos</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />
        <meta property="og:image" content="/images/cover.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Resultados da Busca - NefroSinos" />
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-10 mx-auto p-0">
            <Section pt="116" mb="120" mt="120">
              <FilteredPosts posts={resultPosts} category={`Resultados da sua busca por "${searchTerm}":`} />
            </Section>
          </div>
        </div>
      </div>
    </main>
  )
}

SearchResults.layout = MainLayout;
SearchResults.showContact = true;

export async function getServerSideProps({ query }) {
  if (!Object.keys(query).length) {
    return {
      notFound: true,
    }
  }

  const resultPosts = await fetchAPI('posts', `&_q=${query.search}&sort=createdAt:DESC`, '*');
  const layout = await getLayoutContent();

  return {
    props: {
      searchTerm: query.search,
      resultPosts,
      layout, // will only be used in `_app.js`
    },
    // revalidate: 60,
  }
}