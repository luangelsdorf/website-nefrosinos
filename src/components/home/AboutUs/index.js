import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './AboutUs.module.scss';

export default function AboutUs({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
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
            <div className={styles.textContent}>
              <Title overline={content.title.overline} title={content.title.title} align="start" />
              <p>{content.text}</p>
              <Link href="/sobre-nos">
                <a className="btn secondary">Sobre Nós</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
