import React from 'react';
import Section from 'src/components/common/Section';
import MainLayout from 'src/components/layout/Main';
import Body from 'src/components/post/Body';
import Hero from 'src/components/post/Hero';
import RecentPosts from 'src/components/post/RecentPosts';
import Share from 'src/components/post/Share';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function Post({ singlePost, recentPosts }) {

  return (
    <main>
      <Hero content={singlePost} />
      <div style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-8 mx-auto">
              <Body content={singlePost.body} />
              <Section mt="80" mb="160">
                <Share content={singlePost} />
              </Section>
            </div>
          </div>
        </div>
      </div>
      <Section pt="120" pb="120" style={{ backgroundColor: 'var(--gray-70_50)' }}>
        <RecentPosts posts={recentPosts} />
      </Section>
    </main>
  )
}

Post.layout = MainLayout;
Post.showContact = true;

export async function getStaticPaths() {
  const posts = await fetchAPI('posts');
  const paths = posts.map(post => ({
    params: { slug: post.attributes.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await fetchAPI('posts', '&sort=createdAt:DESC');
  const recentPosts = [posts[0], posts[1]];
  const singlePost = posts.filter(post => post.attributes.slug === slug)[0].attributes;

  const layout = await getLayoutContent();

  return {
    props: {
      singlePost,
      recentPosts,

      layout, // will only be used in `_app.js`
    }
  }
}