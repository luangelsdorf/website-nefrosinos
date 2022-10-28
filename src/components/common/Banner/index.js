import Image from 'next/future/image';
import React from 'react';
import { apiURL } from 'src/utils/env';
import styles from './Banner.module.scss';

export default function Banner({ content, children, height = 480, ...rest }) {
  return (
    <section className={styles.banner} style={{ height: `${height}px` }} {...rest}>
      <Image src={apiURL + content.cover.data.attributes.url} fill alt="" />
      <div className="container">
        {
          children
        }
      </div>
    </section>
  )
}
