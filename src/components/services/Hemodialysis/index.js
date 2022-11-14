import Image from 'next/future/image';
import React from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './Hemodialysis.module.scss';

export default function Hemodialysis({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row gy-4">
          <div className="col offset-lg-1">
            <Image src={apiURL + content.image.data.attributes.url} width="542" height="632" alt="" />
          </div>
          <div className="col-12 col-lg-4 offset-lg-1">
            <div className={styles.textContent}>
              <Title title={content.title.title} overline={content.title.overline} align="flex-start" variant="dark" />
              <p>{content.text}</p>
            </div>
          </div>
          <div className="col-lg-1" />
        </div>
      </div>
    </div>
  )
}
