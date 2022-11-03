import Image from 'next/future/image';
import React from 'react';
import { apiURL } from 'src/utils/env';
import styles from './Certificates.module.scss';

export default function Certificates({ content }) {
  return (
    <div className="container">
      <div className={styles.section}>
        <div className={styles.text}>
          <h2>{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={styles.certificates}>
          {
            content.certificates.map(cert => (
              <Image
                src={apiURL + cert.image.data.attributes.url}
                width={cert.image.data.attributes.width}
                height={cert.image.data.attributes.height}
                alt="Certificado"
                key={cert.id}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
