import React from 'react';
import styles from './Copyright.module.scss';

export default function Copyright({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <small>{content.copyright}</small>
          <div className={styles.icons}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="32" width="32">
              <rect width="100" height="100" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="32" width="32">
              <rect width="100" height="100" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="32" width="32">
              <rect width="100" height="100" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
