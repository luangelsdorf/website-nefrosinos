import Head from 'next/head';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';
import MainLayout from 'src/components/layout/Main';

export default function Home({ home, partners, team }) {

  return (
    <main>
      <h1 style={{ height: '300vh' }}>Homepage</h1>
      {/* <Header /> */}
      {/* <HeroSlider content={home.bannerSlider} height={880} /> */}
      {/* <Section>
          <Service content={home.service} />
        </Section> */}
      {/* <Section>
          <AboutUs content={home.aboutUs} />
        </Section> */}
      {/* <Section pt="96" >
          <OurTeam content={home.ourTeam} team={team} />
        </Section> */}
      {/* <Section>
          <Partners content={home.partners} partners={partners} length={6} />
        </Section> */}
      {/* <Section>
          <Structure content={home.structure} />
        </Section> */}
    </main>
  )
}

Home.layout = MainLayout;

export async function getStaticProps() {
  const home = await fetchAPI('home-site');
  const partners = await fetchAPI('parceiro');
  const team = await fetchAPI('equipe');

  const layout = await getLayoutContent();

  return {
    props: {
      home,
      partners,
      team,

      layout, // will only be used in `_app.js`
    }
  }
}