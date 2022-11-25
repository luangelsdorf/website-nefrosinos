import Link from 'next/link';
import React from 'react';
import Banner from 'src/components/common/Banner';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './Hero.module.scss';

export default function Hero({ content }) {
  return (
    <Banner cover={apiURL + content.cover.data.attributes.url} className={styles.hero}>
      <div className={styles.bannerContent}>
        <Title content={content.title} align="center" />
        <Link href="/contato">
          <a className="btn secondary icon">Agendar Consulta</a>
        </Link>
      </div>
    </Banner>
  )
}
