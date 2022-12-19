import Link from 'next/link';
import React from 'react';
import Banner from 'src/components/common/Banner';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './Hero.module.scss';

export default function Hero({ content }) {
  return (
    <Banner cover={apiURL + content.cover.data.attributes.url} className={styles.hero}>
      <div className="row">
        <div className="col-12">
          <div className={styles.bannerContent}>
            <Title content={content.title} align="center" variant="dark" />
            <Link href="/contato">
              <a className="btn light icon">Agendar Consulta</a>
            </Link>
          </div>
        </div>
      </div>
    </Banner>
  )
}
