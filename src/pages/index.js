import Head from 'next/head';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';
import MainLayout from 'src/components/layout/main';
import Section from 'src/components/common/Section';
import HeroSlider from 'src/components/home/HeroSlider';
import Service from 'src/components/home/Service';
import AboutUs from 'src/components/home/AboutUs';
import OurTeam from 'src/components/home/OurTeam';
import Partners from 'src/components/home/Partners';
import Structure from 'src/components/home/Structure';
import RecentPosts from 'src/components/home/RecentPosts';
import Calculator from 'src/components/home/Calculator';
import Title from 'src/components/common/Title';
import ReferencePopUp from 'src/components/home/ReferencePopUp';

export default function Home({ home, partners, team, recentPosts }) {

  return (
    <main>

      <Head>
        <title>NefroSinos</title>
        <meta name="description" content="" />
        <meta property="og:image" content="/images/cover.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta property="og:url" content="https://nefrosinos.com.br/" />
      </Head>

      <HeroSlider content={home.bannerSlider} height={880} />

      <Section id="servico">
        <Service content={home.service} />
      </Section>

      <Section mt="140 80" id="sobre">
        <AboutUs content={home.aboutUs} />
      </Section>

      <Section pt="96" mt="184 120" id="equipe">
        <OurTeam content={home.ourTeam} team={team} />
      </Section>

      <Section mt="200 120" id="convenios">
        <Partners content={home.partners} partners={partners} length={6} />
      </Section>

      <Section mt="200 120" id="estrutura">
        <Structure content={home.structure} />
      </Section>

      <Section mt="160" id="calculadora">
        <Calculator content={home.referenceTable} />
      </Section>

      <Section mt="160" mb="200 120" id="posts-recentes">
        <RecentPosts content={home.blog} posts={recentPosts} />
      </Section>
    </main>
  )
}

Home.layout = MainLayout;
Home.showContact = true;

export async function getStaticProps() {
  const home = await fetchAPI('home-site');
  const partners = await fetchAPI('parceiro');
  const team = await fetchAPI('equipe');
  const posts = await fetchAPI('posts', '&sort=createdAt:DESC');
  const recentPosts = [posts[0], posts[1], posts[2]];

  const layout = await getLayoutContent();

  return {
    props: {
      home,
      partners,
      team,
      recentPosts,

      layout, // will only be used in `_app.js`
    },
    revalidate: 60,
  }
}