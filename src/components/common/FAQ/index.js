import React, { useEffect, useRef } from 'react';
import Title from '../Title';
import styles from './FAQ.module.scss';
import AngleDown from 'public/images/icons/angle-down.svg';

export default function FAQ({ content }) {
  const faq = useRef(null);

  useEffect(() => {
    require('bootstrap/js/dist/collapse');

    function handleCollapse(e) {
      if (e.type === 'show.bs.collapse') {
        e.currentTarget.classList.add(styles.active);
      } else {
        e.currentTarget.classList.remove(styles.active);
      }
    }

    faq.current?.childNodes.forEach(q => {
      q.addEventListener('show.bs.collapse', handleCollapse);
      q.addEventListener('hide.bs.collapse', handleCollapse);
    });

    return () => {
      faq.current?.childNodes.forEach(q => {
        q.removeEventListener('show.bs.collapse', handleCollapse);
        q.removeEventListener('hide.bs.collapse', handleCollapse);
      });
    }
  }, []);

  const Question = props => (
    <article data-bs-toggle="collapse" data-bs-target={`#faq-collapse-${props.id}`}>
      <header>
        <h3>{props.title}</h3>
        <button className="btn pink small" type="button">
          <span>
            <AngleDown />
          </span>
        </button>
      </header>
      <div className="collapse" id={`faq-collapse-${props.id}`}>
        <div className={styles.answer}>
          <p>{props.text}</p>
        </div>
      </div>
    </article>
  )

  return (
    <div className={styles.section}>
      <Title content={content.title} align="center" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className={styles.questions} ref={faq}>
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
