import Image from 'next/future/image';
import React from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import Angle from 'public/images/icons/angle-right-solid.svg';
import styles from './PeritonealDialysis.module.scss';

export default function PeritonealDialysis({ content }) {
  return (
    <div className={styles.bgWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.section}>
              <div className={styles.textContent}>
                <Title content={content.title} align="start" variant="light" />
                <p>{content.text}</p>
                <strong>
                  <Angle />
                  <span>{content.warning.text}</span>
                </strong>
              </div>

              <Image src={apiURL + content.image.data.attributes.url} width="480" height="520" alt="" />

              <div className={styles.advantages}>
                {
                  content.highlights.map(item => (
                    <article key={item.id}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
