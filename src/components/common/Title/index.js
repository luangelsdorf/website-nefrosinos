import React from 'react';
import styles from './Title.module.scss';

export default function Title({ content: { title, overline }, align = 'center', spacing = 24, variant, children, level = 2 }) {
  const Tag = `h${level}`;

  return (
    <header className={`${styles.title} ${styles[variant] ?? ''} ${styles[align] ?? ''}`} style={{ gap: `${spacing}px` }}>
      {
        children ? (
          children
        ) : (
          <>
            {overline && <p>{overline}</p>}
            <Tag>{title}</Tag>
          </>
        )
      }
    </header>
  )
}
