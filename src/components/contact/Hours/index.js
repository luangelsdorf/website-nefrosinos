import React from 'react';
import styles from './Hours.module.scss';

export default function Hours({ info }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <div className={styles.content}>
              <div>
                <strong>Horário de Atendimento</strong>
                <p>{info.serviceHours}</p>
              </div>
              <div>
                <strong>Horário de Funcionamento</strong>
                <p>{info.openingHours}</p>
                <p>Fale conosco para mais informações.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
