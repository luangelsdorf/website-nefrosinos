import Image from 'next/future/image';
import React from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './Structure.module.scss';

export default function Structure({ content }) {

  const [top, bottomLeft, bottomRight, topLeft, topRight, bottom] = content.gallery;

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <div className={styles.title}>
              <Title content={content.title} />
              <p>{content.text}</p>
            </div>
          </div>
          
          <div className="col-3" />

          <div className="col-12 col-lg-6">
            <div className={styles.imgContainer}>
              <Image className={styles.largeImage} src={apiURL + top.image.data.attributes.url} height="540" width="540" />
              <div className="row">
                <div className="col-12 col-md-6">
                  <Image className={styles.smallImage} src={apiURL + bottomLeft.image.data.attributes.url} height="296" width="296" />
                </div>
                <div className="col-12 col-md-6">
                  <Image className={styles.smallImage} src={apiURL + bottomRight.image.data.attributes.url} height="296" width="296" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.imgContainer}>
              <div className="row">
                <div className="col-12 col-md-6">
                  <Image className={styles.smallImage} src={apiURL + topLeft.image.data.attributes.url} height="296" width="296" />
                </div>
                <div className="col-12 col-md-6">
                  <Image className={styles.smallImage} src={apiURL + topRight.image.data.attributes.url} height="296" width="296" />
                </div>
              </div>
              <Image className={styles.largeImage} src={apiURL + bottom.image.data.attributes.url} height="540" width="540" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
