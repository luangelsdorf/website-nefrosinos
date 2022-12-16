import Link from 'next/link';
import React from 'react';
import Title from 'src/components/common/Title';
import styles from './ConservativeTreatment.module.scss';

export default function ConservativeTreatment({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <div className={styles.textContent}>
              <Title content={content.title} align="center" variant="light" />
              <p>{content.text}</p>
              <div className={styles.links}>
                <Link href="/">
                  <a className="btn dark">Conheça Nossa Equipe</a>
                </Link>
                <Link href="/">
                  <a className="btn icon blue">Fale Conosco</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
