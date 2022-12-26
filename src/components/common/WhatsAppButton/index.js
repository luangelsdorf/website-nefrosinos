import React from 'react';
import styles from './WhatsAppButton.module.scss';
import WhatsApp from 'public/images/icons/whatsapp.svg';

export default function WhatsAppButton({ number = '51997045886' }) {

  return (
    <a
      className={`${styles.btn} link-image`}
      href={`https://api.whatsapp.com/send?phone=${number}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <WhatsApp />
    </a>
  )
}
