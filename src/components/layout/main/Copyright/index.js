import React from 'react';
import styles from './Copyright.module.scss';
import Facebook from 'public/images/icons/facebook.svg';
import Instagram from 'public/images/icons/instagram.svg';

export default function Copyright({ content, info }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <small>{content.copyright}</small>
          <div className={styles.icons}>
            <a href={info.facebook} rel="noopener noreferrer" target="_blank">
              <Facebook />
            </a>
            <a href={info.instagram} rel="noopener noreferrer" target="_blank">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
