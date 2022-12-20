import Head from 'next/head';
import React from 'react';
import Hero from 'src/components/blog/Hero';
import MainPosts from 'src/components/blog/MainPosts';
import PostList from 'src/components/blog/PostList';
import Section from 'src/components/common/Section';
import MainLayout from 'src/components/layout/main';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';
import { hasCategory } from 'src/utils/helpers';

export default function Blog({ blog, posts, categories }) {
  const newsAndArticles = posts.filter(post => hasCategory(post, 'noticias') || hasCategory(post, 'artigos') || hasCategory(post, 'noticia') || hasCategory(post, 'artigo'));
  const mediaPosts = posts.filter(post => hasCategory(post, 'na-midia'));

  return (
    <main>

      <Head>
        <title>Blog - NefroSinos</title>
        <meta name="description" content="" />
        <meta property="og:image" content="/images/cover.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog" />
        <meta property="og:url" content="https://nefrosinos.com.br/blog" />
      </Head>

      <Hero content={blog.banner} categories={categories} />
      <div style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto">

              <Section mt="160 80" id="principais">
                <MainPosts posts={posts} />
              </Section>

              <Section mt="150 80" pt="120 80" style={{ borderTop: '1px solid var(--gray-10)' }} id="artigos">
                <PostList posts={newsAndArticles} title="Artigos e Notícias" category="noticias" />
              </Section>

              <Section mb="200 120" mt="160 96" pt="120 96" style={{ borderTop: '1px solid var(--gray-10)' }} id="midia">
                <PostList posts={mediaPosts} title="Saiu na Mídia" category="na-midia" />
              </Section>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

Blog.layout = MainLayout;
Blog.showContact = true;

export async function getStaticProps() {
  const blog = await fetchAPI('home-blog');
  const posts = await fetchAPI('posts');
  const categories = await fetchAPI('categorias');

  const layout = await getLayoutContent();

  return {
    props: {
      blog,
      posts,
      categories,

      layout, // will only be used in `_app.js`
    },
    revalidate: 60,
  }
}