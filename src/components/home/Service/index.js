import Link from 'next/link';
import React from 'react';
import styles from './Service.module.scss';

export default function Service({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <div className={styles.service}>
              <h2>{content.title}</h2>
              <div className={styles.separator} />
              <p>{content.text}</p>
              <Link href="/contato">
                <a className="btn large">Agendar Horário</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
