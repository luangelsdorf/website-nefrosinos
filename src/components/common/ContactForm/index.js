import React from 'react';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <input name="name" type="text" placeholder="Nome" />
      <input name="phone" type="tel" placeholder="Telefone" />
      <input name="email" type="email" placeholder="E-mail para Contato" />
      <textarea name="message" rows="4" placeholder="Mensagem" />
      <button className="btn icon" type="submit">Enviar Mensagem</button>
    </form>
  )
}
