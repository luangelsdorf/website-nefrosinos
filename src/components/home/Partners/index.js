import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './Partners.module.scss';

export default function Partners({ content, partners, length = 6 }) {
  const numberOfPartners = [...Array(length).keys()];
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className={styles.textContent}>
              <Title content={{ title: content.title, overline: 'Convênios' }} align="start" />
              <p>{content.text}</p>
              <Link href="/services#convenios">
                <a className="btn pink icon d-none d-lg-inline-flex">Lista de Convênios</a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className={`row ${styles.logoRow}`}>
              {
                numberOfPartners.map(partner => {
                  let currentPartner = partners.partners[partner].image.data.attributes;
                  return (
                    <div className="col-6 col-md-6 col-lg-4" key={partners.partners[partner].id}>
                      <div className={styles.partnerLogo}>
                        <Image
                          src={apiURL + currentPartner.url}
                          width={currentPartner.width}
                          height={currentPartner.height}
                          alt={`Logo ${partners.partners[partner].name}`} />
                      </div>
                    </div>
                  )
                })
              }
              <div style={{ padding: '0 10px', marginTop: '40px' }}>
                <Link href="/services#convenios">
                  <a style={{ width: 'max-content' }} className="btn pink icon d-inline-flex d-lg-none">Lista de Convênios</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
