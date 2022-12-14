import Head from 'next/head';
import WhatsAppButton from 'src/components/common/WhatsAppButton';
import 'src/styles/styles.scss';
import 'swiper/css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {
        Component.layout ? (
          <Layout content={pageProps.layout} contact={Component.showContact}>
            <Component {...pageProps} />
            <WhatsAppButton number={'55' + pageProps.layout.info.whatsapp.replace(/[^a-zA-Z0-9 ]/g, '').split(' ').join('')} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )
      }
    </>
  )
}

export default MyApp
