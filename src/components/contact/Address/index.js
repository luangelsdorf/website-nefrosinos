import React from 'react';
import styles from './Address.module.scss';

export default function Address({ content, info }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className={styles.content}>
              <div>
                <p className="d-none d-md-none">{content.text.title}</p>
                <h1>{content.text.text}</h1>
              </div>
              <div>
                <p>{content.secondText}</p>
                <address>{info.address}</address>
              </div>
              <div>
                <a
                  className="btn large icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://maps.google.com/maps?q=${info.address}`}
                >
                  Abrir Mapa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
