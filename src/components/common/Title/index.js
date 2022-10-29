import React from 'react';
import styles from './Title.module.scss';

export default function Title({ title, overline, align = 'center', spacing = 24, variant, children }) {
  return (
    <header
      className={`${styles.title} ${styles[variant]}`}
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
            {overline && <p>{overline}</p>}
            <h2>{title}</h2>
          </>
        )
      }
    </header>
  )
}
