import Image from 'next/future/image';
import React from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './Timeline.module.scss';
import Point from 'public/images/icons/tl-point.svg';
import Line from 'public/images/curve-line.svg';

export default function Timeline({ content }) {

  const Card = props => {
    return (
      <li className={styles.card}>
        <Point />
        <time dateTime={props.year}>{props.year}</time>
        <div className={styles.info}>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      </li>
    )
  }

  return (
    <div className={styles.section}>
      <div className={styles.headingSection}>
        <Title title={content.title.title} overline={content.title.overline} variant="dark" />
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
      </div>
      <div className={styles.timeline}>
        {/* <Line className={styles.line} /> */}
        <Point className={styles.point} />
        <ol>
          <Card />
          {
            content.milestones.map(card => (
              <Card key={card.id} {...card} />
            ))
          }
          <Card />
        </ol>
        <Point className={styles.point} />
      </div>
    </div>
  )
}