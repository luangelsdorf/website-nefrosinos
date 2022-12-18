import React from 'react';
import styles from './Hero.module.scss';
import GoogleMap from 'src/components/common/GoogleMap';

export default function Hero({ info }) {
  return (
    <section className={styles.hero}>
      <span>Carregando mapa...</span>
      <GoogleMap address={info.address} />
    </section>
  )
}
