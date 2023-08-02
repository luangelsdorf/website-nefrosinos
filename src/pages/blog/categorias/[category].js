import Head from 'next/head';
import React from 'react';
import FilteredPosts from 'src/components/categories/FilteredPosts';
import Section from 'src/components/common/Section';
import MainLayout from 'src/components/layout/main';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function Category({ posts, category }) {
  return (
    <main>

      <Head>
        <title>{category} - Blog NefroSinos</title>
        <meta name="description" content="" />
        <meta property="og:image" content="/images/cover.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${category} - Blog NefroSinos`} />
        <meta property="og:url" content={`https://nefrosinos.com.br/blog/categorias/${category}`} />
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-10 mx-auto p-0">
            <Section pt="116" mb="120" mt="120">
              <FilteredPosts posts={posts} category={category} />
            </Section>
          </div>
        </div>
      </div>
    </main>
  )
}

Category.layout = MainLayout;
Category.showContact = true;

export async function getStaticPaths() {
  const categories = await fetchAPI('categorias', '', '*');
  const paths = categories.map(cat => ({
    params: { category: cat.attributes.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params: { category } }) {
  const posts = await fetchAPI('posts', `&filters[$and][0][categories][slug][$contains]=${category}&sort=createdAt:DESC`, '*');
  const categoryName = await fetchAPI('categorias', `&filters[$and][0][slug][$eq]=${category}`);

  const layout = await getLayoutContent();

  return {
    props: {
      posts,
      category: categoryName[0].attributes.name,
      layout, // will only be used in `_app.js`
    },
    revalidate: 60,
  }
}