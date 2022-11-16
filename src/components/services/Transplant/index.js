import Image from 'next/future/image';
import React from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './Transplant.module.scss';

export default function Transplant({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className={styles.textContent}>
              <Title content={content.title} align="start" />
              <p>{content.text}</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <div className={styles.collage}>
              <Image src={apiURL + content.lgImage.data.attributes.url} height="560" width="526" alt="Foto" />
              <Image src={apiURL + content.smImage.data.attributes.url} height="320" width="304" alt="Foto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
