import React from 'react';
import styles from './Title.module.scss';

export default function Title({ title, overline, align = 'center', spacing = 24, dark, children }) {
  return (
    <hgroup
      className={`${styles.title} ${dark ? styles.dark : ''}`}
      style={{
        gap: `${spacing}px`,
        alignItems: align,
      }}
    >
      {
        children ? (
          children
        ) : (
          <>
            <p>{overline}</p>
            <h2>{title}</h2>
          </>
        )
      }
    </hgroup>
  )
}
