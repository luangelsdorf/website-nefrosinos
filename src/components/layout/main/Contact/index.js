import Link from 'next/link';
import React from 'react';
import Title from 'src/components/common/Title';
import styles from './Contact.module.scss';
import Arrow from 'public/images/icons/arrow-right.svg';
import GoogleMap from 'src/components/common/GoogleMap';
import ContactForm from 'src/components/common/ContactForm';

export default function Contact({ content, info }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className={styles.textContent}>
              <Title content={content.contact.title} align="start" spacing="16" />
              <p>{content.contact.text}</p>
              <address>
                <span>Telefone: </span>{info.phone}
                <span>WhatsApp: </span>{info.whatsapp}
              </address>
              <ContactForm />
            </div>
          </div>

          <div className="col-12 col-lg-5 offset-lg-1">
            <figure className={styles.map}>
              <GoogleMap address={info.address} />
              <figcaption>
                NefroSinos
                <address>{info.address}</address>
              </figcaption>
            </figure>
          </div>

          <div className="col-12 col-lg-3">
            <div className={styles.hours}>
              <div>
                <h3>Horários de Funcionamento</h3>
                <p>{info.openingHours}</p>
              </div>
              <div>
                <h3>Horários de Atendimento</h3>
                <p>{info.serviceHours}</p>
              </div>
              <p>{content.contact.hoursText}</p>
              <Link href="/contato">
                <a>
                  Saber mais
                  <Arrow />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
