import React from 'react';
import ContactForm from 'src/components/common/ContactForm';
import Title from 'src/components/common/Title';
import styles from './ContactInfo.module.scss';

export default function ContactInfo({ content, info }) {
  
  const InfoCard = props => (
    <div className={styles.infoCard}>
      <img width="48" height="48" src={props.icon} alt="" />
      <div>
        <p>{props.name}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  )

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className={styles.formSection}>
              <Title content={{ title: 'Formulário de Contato', overline: 'Envie sua Mensagem' }} align="start" spacing="16" />
              <ContactForm />
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-2">
            <div className={styles.infoSection}>
              <Title content={content.title} align="start" spacing="16" />
              <p>{content.firstText}</p>
              <address>
                <InfoCard icon="/images/icons/square.png" name="Telefone" phone={info.phone} />
                <InfoCard icon="/images/icons/square.png" name="WhatsApp" phone={info.whatsapp} />
              </address>
              <p>{content.secondText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
