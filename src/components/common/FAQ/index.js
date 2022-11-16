import React, { useEffect } from 'react';
import Title from '../Title';
import styles from './FAQ.module.scss';

export default function FAQ({ content }) {

  useEffect(() => {
    require('bootstrap/js/dist/collapse');
  }, []);

  const Question = props => (
    <article>
      <header>
        <h3>{props.title}</h3>
        <button className="btn small" type="button" data-bs-toggle="collapse" data-bs-target={`#faq-collapse-${props.id}`} />
      </header>
      <div className="collapse" id={`faq-collapse-${props.id}`}>
        <p>{props.text}</p>
      </div>
    </article>
  )

  return (
    <div className={styles.section}>
      <Title content={content.title} align="center" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className={styles.questions}>
              {
                content.questions.map(q => (
                  <Question {...q} key={q.id} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
