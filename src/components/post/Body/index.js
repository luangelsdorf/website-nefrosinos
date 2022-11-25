import React from 'react';
import styles from './Body.module.scss';

export default function Body({ content }) {
  return (
    <article dangerouslySetInnerHTML={{ __html: content }} className={styles.body} />
  )
}
