import Image from 'next/future/image';
import React from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './WaterTreatment.module.scss';

export default function WaterTreatment({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <div className={styles.content}>
              <Title content={content.title} variant="light" />
              <p>{content.text}</p>
            </div>
          </div>
        </div>
      </div>

      <Image src={apiURL + content.background.data.attributes.url} fill alt="" />
    </div>
  )
}
