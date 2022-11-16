import React from 'react';
import Title from 'src/components/common/Title';
import Arrow from 'public/images/icons/arrow-right.svg';
import styles from './Partners.module.scss';
import Image from 'next/future/image';
import { apiURL } from 'src/utils/env';

export default function Partners({ content, partners }) {
  return (
    <div className={styles.section}>
      <Title content={content.title} />
      <div className="container">
        <div className="row gy-4">
          {
            partners.map(partner => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Image className={styles.logo} src={apiURL + partner.image.data.attributes.url} width="300" height="300" alt="" />
              </div>
            ))
          }
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className={styles.finalText}>
              <h3>{content.finalText.title}</h3>
              <p>{content.finalText.text}</p>
              <a href="https://www.hospitalregina.com.br/informacoes-uteis/convenios" rel="noopener noreferrer" target="_blank">
                Confira a lista aqui <Arrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}