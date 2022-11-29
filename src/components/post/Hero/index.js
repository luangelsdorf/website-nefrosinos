import Link from 'next/link';
import React from 'react';
import Banner from 'src/components/common/Banner';
import { apiURL } from 'src/utils/env';
import styles from './Hero.module.scss';

export default function Hero({ content }) {
  return (
    <Banner cover={apiURL + content.cover.data.attributes.url} className={styles.section}>
      <div className="row">
        <div className="col-12 col-xl-8 mx-auto">
          <header className={styles.bannerContent}>
            <h1>{content.title}</h1>
            <p>
              Categoria(s): &nbsp;
              {
                content.categories.data.map(cat => (
                  <span key={cat.id}>
                    <Link href={`/categorias`}>
                      <a>{cat.attributes.name}</a>
                    </Link>
                  </span>
                ))
              }
            </p>
          </header>
        </div>
      </div>
    </Banner>
  )
}
