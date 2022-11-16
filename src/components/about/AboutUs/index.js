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
          <div className="col-12 col-lg-5">
            <div className={styles.text}>
              <Title content={content.title} align="start" />
              <p>{content.text}</p>
              <Link href="/contato">
                <a className="btn icon">Fale Conosco</a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <div className={styles.image}>
              <Image
                src={apiURL + content.image.data.attributes.url}
                /* width={content.image.data.attributes.width}
                height={content.image.data.attributes.height} */
                fill
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
