import React, { useEffect, useRef } from 'react';
import styles from './GoogleMap.module.scss';

export default function GoogleMap({ address }) {
  const frame = useRef(null);

  const frameParams = {
    q: address,
    z: '15',
    ie: 'UTF8',
    output: 'embed',
  }

  useEffect(() => {
    const queryString = new URLSearchParams(frameParams).toString();
    frame.current.src = `https://maps.google.com/maps?${queryString}`
  }, []);

  return (
    <iframe title="Localização da NefroSinos" className={styles.frame} ref={frame} />
  )
}
