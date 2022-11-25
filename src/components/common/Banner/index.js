import Image from 'next/future/image';
import React from 'react';
import { apiURL } from 'src/utils/env';
import styles from './Banner.module.scss';

export default function Banner({ cover, children, className, ...rest }) {
  return (
    <section className={`${styles.banner} ${className ?? ''}`} {...rest}>
      {cover && <Image src={cover} fill alt="" priority />}
      <div className="container">
        {
          children
        }
      </div>
    </section>
  )
}
