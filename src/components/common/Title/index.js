import React from 'react';
import styles from './Title.module.scss';

export default function Title({ content, align = 'center', spacing = 24, variant, children }) {
  const { title, overline } = content;

  let alignment = { flex: align, text: align };
  switch (align) {
    case 'start':
      alignment.flex = 'flex-start';
      alignment.text = 'left';
      break;
    case 'end':
      alignment.flex = 'flex-end';
      alignment.text = 'right';
      break;
  }

  return (
    <header
      className={`${styles.title} ${styles[variant]}`}
      style={{
        gap: `${spacing}px`,
        alignItems: alignment.flex,
        textAlign: alignment.text,
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
