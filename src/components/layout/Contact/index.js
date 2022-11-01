import Link from 'next/link';
import React from 'react';
import Title from 'src/components/common/Title';
import styles from './Contact.module.scss';
import Arrow from 'public/images/icons/arrow-right.svg';
import GoogleMap from 'src/components/common/GoogleMap';

export default function Contact({ content, info }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className={styles.textContent}>
              <Title title={content.contact.title.title} overline={content.contact.title.overline} align="start" spacing="16" />
              <p>{content.contact.text}</p>
              <address>
                <span>Telefone: </span>{info.phone}
                <span>WhatsApp: </span>{info.whatsapp}
              </address>
              <form>
                <input name="name" type="text" placeholder="Nome" />
                <input name="phone" type="tel" placeholder="Telefone" />
                <input name="email" type="email" placeholder="E-mail para Contato" />
                <textarea name="message" rows="4" placeholder="Mensagem" />
                <button className="btn icon" type="submit">Enviar Mensagem</button>
              </form>
            </div>
          </div>

          <div className="col-12 col-lg-5 offset-lg-1">
            <figure className={styles.map}>
              <GoogleMap address={info.address} />
              <figcaption>
                Nefrosinos
                <address>{info.address}</address>
              </figcaption>
            </figure>
          </div>

          <div className="col-12 col-lg-3">
            <div className={styles.hours}>
              <h3>Horários de Atendimento</h3>
              <p>{info.openingHours}</p>
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
