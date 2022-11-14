import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './InTransit.module.scss';

export default function InTransit({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className={styles.collage}>
              <div>
                <Image src={apiURL + content.lgImage.data.attributes.url} fill alt="Foto" />
              </div>
              <div>
                <Image src={apiURL + content.smImage.data.attributes.url} fill alt="Foto" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-xl-1">
            <div className={styles.textContent}>
              <Title content={content.title} align="flex-start" />
              <p>{content.text}</p>
              <Link href="#">
                <a className="btn">Saiba Mais</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
