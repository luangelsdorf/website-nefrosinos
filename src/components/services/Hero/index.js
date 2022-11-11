import Link from 'next/link';
import React from 'react';
import Banner from 'src/components/common/Banner';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './Hero.module.scss';

export default function Hero({ content }) {
  return (
    <section className={styles.hero}>
      <Banner cover={apiURL + content.cover.data.attributes.url}>
        <div className={styles.bannerContent}>
          <Title title={content.title.title} overline={content.title.overline} align="center" />
          <Link href="/contato">
            <a className="btn secondary icon">Agendar Consulta</a>
          </Link>
        </div>
      </Banner>
    </section>
  )
}
