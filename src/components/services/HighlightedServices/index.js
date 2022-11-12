import React from 'react';
import { apiURL } from 'src/utils/env';
import styles from './HighlightedServices.module.scss';
import Arrow from 'public/images/icons/arrow-right.svg';
import Link from 'next/link';

export default function HighlightedServices({ content }) {

  const Card = props => (
    <article className={styles.card}>
      <header>
        <div>
          <img src={apiURL + props.icon.data.attributes.url} width="40" height="40" />
          <h2>{props.title}</h2>
        </div>
        <p>{props.subtitle}</p>
      </header>
      <p>{props.text}</p>
      <Link href="#">
        <a>
          Saber mais <Arrow />
        </a>
      </Link>
    </article>
  )

  return (
    <div className={styles.services}>
      <div className="container">
        <div className="row gy-4">
          {
            content.serviceCards.map(card => (
              <div className={`col-12 col-lg-4 ${styles.col}`} key={card.id}>
                <Card {...card} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
