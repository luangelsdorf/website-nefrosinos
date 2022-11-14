import Image from 'next/future/image';
import React from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './TimelineAlt.module.scss';

export default function TimelineAlt({ content }) {
  return (
    <div className={styles.section}>
      {/* <div className={styles.headingSection}>
        <Title content={content.title} variant="dark" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className={styles.image}>
                <Image
                  src={apiURL + content.image.data.attributes.url}
                  fill
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.timeline}>
        <div className={styles.outer}>
          <div className={styles.card}>
            <div className={styles.info}>
              <h3 className={styles.title}>Title 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.info}>
              <h3 className={styles.title}>Title 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.info}>
              <h3 className={styles.title}>Title 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.info}>
              <h3 className={styles.title}>Title 4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.info}>
              <h3 className={styles.title}>Title 5</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
