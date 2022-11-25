import Link from 'next/link';
import React from 'react';
import Banner from 'src/components/common/Banner';
import { apiURL } from 'src/utils/env';
import styles from './Hero.module.scss';

export default function Hero({ content, categories }) {
  return (
    <Banner cover={apiURL + content.cover.data.attributes.url} className={styles.section}>
      <div className="row">
        <div className="col-12 col-xl-10 mx-auto">
          <div className={styles.bannerContent}>
            <h1>{content.title}</h1>
            <h2>{content.text}</h2>
            <div className={styles.categories}>
              {
                categories.map(cat => (
                  <Link href="/categorias" key={cat.id}>
                    <a className="btn small">{cat.attributes.name}</a>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Banner>
  )
}
