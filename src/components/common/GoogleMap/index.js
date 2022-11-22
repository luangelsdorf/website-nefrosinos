import React, { useRef } from 'react';
import styles from './GoogleMap.module.scss';

export default function GoogleMap({ address, params = {} }) {
  const frame = useRef(null);

  const frameParams = {
    q: address,
    z: '15',
    ie: 'UTF8',
    output: 'embed',
    ...params,
  }

  const getParams = () => new URLSearchParams(frameParams).toString();

  return (
    <div className={styles.wrapper}>
      <iframe
        title="Localização da NefroSinos"
        src={`https://maps.google.com/maps?${getParams()}`}
        className={styles.frame}
        ref={frame}
      />
    </div>
  )
}
