import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './Hemodiafiltration.module.scss';

export default function Hemodiafiltration({ content }) {

  const sizes = [4, 3, 3];

  function highlightFirstWord(text) {
    const [firstWord, ...rest] = text.split(' ');
    return (
      <>
        <span>{firstWord}</span> {rest.join(' ')}
      </>
    )
  }

  return (
    <div className={styles.section}>
      <div className={styles.info}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className={styles.about}>
                <Title title={content.title.title} overline={content.title.overline} align="flex-start" />
                <p>{content.text}</p>
              </div>
            </div>
            <div className="col-12 col-lg-4 offset-lg-1">
              <div className={styles.note}>
                <Link href="/contato">
                  <a className="btn icon">Agendar Consulta</a>
                </Link>
                <strong>{highlightFirstWord(content.note)}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.benefits}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-2">
              <h3>{content.introText}</h3>
            </div>
            {
              content.benefits.map((benefit, index) => (
                <div className={`col-12 col-lg-${sizes[index]}`} key={benefit.id}>
                  <div className={styles.card}>
                    <img src={apiURL + benefit.icon.data.attributes.url} width="48" height="48" alt="" />
                    <p>{benefit.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
