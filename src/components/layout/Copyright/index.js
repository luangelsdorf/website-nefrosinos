import React from 'react';
import styles from './Copyright.module.scss';

export default function Copyright({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <small>{content.copyright}</small>
        </div>
      </div>
    </div>
  )
}
