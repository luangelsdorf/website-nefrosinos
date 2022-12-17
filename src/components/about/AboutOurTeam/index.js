import React, { useEffect } from 'react';
import { apiURL } from 'src/utils/env';
import styles from './AboutOurTeam.module.scss';

export default function AboutOurTeam({ content }) {

  const sizes = [
    'col-xl-6',
    'col-xl-6',
    'col-xl-4',
    'col-xl-4',
    'col-xl-4',
    'col-xl-6',
    'col-xl-6',
  ];

  function formatTitle(title = '') {
    if (title.toLowerCase().startsWith('equipe')) {
      let article = title.slice(6, 10).toLowerCase().trim();
      if (article === 'de' || article === 'do' || article === 'da') {
        return (
          <span className={styles.multiLine}>
            {title.slice(0, 10) + '\n' + title.slice(10)}
          </span>
        )
      } else {
        return (
          <span className={styles.multiLine}>
            {title.slice(0, 7) + '\n' + title.slice(7)}
          </span>
        )
      }
    }
    return title;
  }

  const Card = props => (
    <article className={styles.card}>
      <header>
        <img src={apiURL + props.icon.data.attributes.url} alt="" height="64" width="64" />
        <h3>{formatTitle(props.title)}</h3>
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