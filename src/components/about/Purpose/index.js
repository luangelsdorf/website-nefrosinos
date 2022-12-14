import React from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './Purpose.module.scss';

export default function Purpose({ content }) {

  function splitLineBreaks(string = '') {
    const items = string.split('\n');
    if (items.length <= 1) {
      return string;
    }
    else {
      return items.map((item, index) => (
        <span key={index}>{item}</span>
      ));
    }
  }

  const Card = props => {
    return (
      <div className={styles.card}>
        <img src={apiURL + props.icon.data.attributes.url} alt="" width="64" height="64" />
        <h3>{props.title}</h3>
        <p>{splitLineBreaks(props.text)}</p>
      </div>
    )
  }

  return (
    <div className={styles.section}>
      <Title content={content.title} align="center" />
      <div className="container">
        <div className="row gy-4">
          {
            content.purposeCards.map(card => (
              <div className="col-12 col-lg-4" key={card.id}>
                <Card {...card} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
