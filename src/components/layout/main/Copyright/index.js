import React from 'react';
import styles from './Copyright.module.scss';
import Facebook from 'public/images/icons/facebook.svg';
import Instagram from 'public/images/icons/instagram.svg';
import Abarca from 'public/images/abarca.svg';

export default function Copyright({ content, info }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.content}>
              <a href="https://abarca.net.br" target="_blank" rel="noopener noreferrer" className={`link-image ${styles.abarca}`}>
                <Abarca style={{width: '30px', height: '30px'}} />
              </a>
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
      </div>
    </div>
  )
}
