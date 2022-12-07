import Image from 'next/future/image';
import React from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './Structure.module.scss';

export default function Structure({ content }) {
  const [{ image: leftImage }, { image: topImage }, { image: bottomImage }, { image: rightImage }] = content.images;
  return (
    <div className={styles.section}>
      <div className="row">
        <div className="col-12">
          <Title content={content.title} />
        </div>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-4">
            <Image
              src={apiURL + leftImage.data.attributes.url}
              width={leftImage.data.attributes.width}
              height={leftImage.data.attributes.height}
              alt=""
            />
          </div>
          <div className="col-12 col-md-6 col-xl-8 mx-auto">
            <div className={styles.topImage}>
              <Image
                src={apiURL + topImage.data.attributes.url}
                width={topImage.data.attributes.width}
                height={topImage.data.attributes.height}
                alt=""
              />
            </div>
            <div className={styles.bottomImage}>
              <Image
                src={apiURL + bottomImage.data.attributes.url}
                width={bottomImage.data.attributes.width}
                height={bottomImage.data.attributes.height}
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <Image
              src={apiURL + rightImage.data.attributes.url}
              width={rightImage.data.attributes.width}
              height={rightImage.data.attributes.height}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
