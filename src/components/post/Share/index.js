import React from 'react';
import ShareUrl from 'share-url';
import styles from './Share.module.scss';

export default function Share({ content }) {

  const linkAttributes = {
    className: 'btn small',
    target: '_blank',
    rel: 'noopener noreferrer',
  }

  return (
    <div className={styles.section}>
      <h2>Compartilhe esse Post</h2>
      <menu>
        <li>
          <a {...linkAttributes} href="#">a</a>
        </li>
        <li>
          <a {...linkAttributes} href="#">a</a>
        </li>
        <li>
          <a {...linkAttributes} href="#">a</a>
        </li>
        <li>
          <a {...linkAttributes} href="#">a</a>
        </li>
      </menu>
    </div>
  )
}
