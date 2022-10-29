import Image from 'next/future/image';
import React from 'react';
import { apiURL } from 'src/utils/env';
import styles from './MemberCard.module.scss';

export default function MemberCard({ name, speciality, photo }) {
  return (
    <figure className={styles.card}>
      <Image src={apiURL + photo.data.attributes.url} fill alt={`Foto de ${name}`} />
      <figcaption>
        <span>{name}</span>
        <span>{speciality}</span>
      </figcaption>
    </figure>
  )
}
