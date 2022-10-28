import Image from 'next/future/image';
import React from 'react';
import { apiURL } from 'src/utils/env';
import styles from './Collage.module.scss';

export default function Collage({ content }) {
  return (
    <div className="container" style={{ marginTop: '96px' }}>
      <div className="row">
        <div className="col-12 col-lg-7">
          <div className={styles.collage}>
            <Image
              className={styles.mdImage}
              src={apiURL + content.mdImage.data.attributes.url}
              width={content.mdImage.data.attributes.width}
              height={content.mdImage.data.attributes.height}
            />
            <Image
              className={styles.lgImage}
              src={apiURL + content.lgImage.data.attributes.url}
              width={content.lgImage.data.attributes.width}
              height={content.lgImage.data.attributes.height}
            />
            <Image
              className={styles.smImage}
              src={apiURL + content.smImage.data.attributes.url}
              width={content.smImage.data.attributes.width}
              height={content.smImage.data.attributes.height}
            />
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <div style={{ backgroundColor: 'tomato', height: '512px' }} />
        </div>
      </div>
    </div>
  )
}
