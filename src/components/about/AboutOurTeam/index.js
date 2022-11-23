import React, { useEffect } from 'react';
import { apiURL } from 'src/utils/env';
import styles from './AboutOurTeam.module.scss';

export default function AboutOurTeam({ content }) {

  const sizes = [
    'col-lg-6 col-xl-5',
    'col-lg-6 col-xl-7',
    'col-xl-4',
    'col-xl-4',
    'col-xl-4'
  ];

  const Card = props => (
    <article className={styles.card}>
      <header>
        <img src={apiURL + props.icon.data.attributes.url} alt="" height="80" width="80" />
        <h3>{props.title}</h3>
      </header>
      <p>{props.text}</p>
    </article>
  );

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row gy-4">
          {
            content.specialistCards.map((card, index) => (
              <div className={`col-12 ${sizes[index]}`} key={card.id}>
                <Card {...card} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}