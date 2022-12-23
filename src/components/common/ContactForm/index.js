import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import Check from 'public/images/icons/check-solid.svg';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const form = useRef(null);

  function onSubmit(data) {
    console.log(data);

    form.current.classList.add(styles.loading);
    Array.from(form.current.elements).forEach(el => el.disabled = true);

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log(res);
        console.log('Response succeeded!');
        form.current.classList.add(styles.loaded);
        form.current.classList.remove(styles.loading);
        setSubmitted(true);
      }
    })
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} ref={form}>
        <input {...register('name', { required: true })} type="text" placeholder="Nome" />
        <input {...register('phone', { required: true })} type="tel" placeholder="Telefone" />
        <input {...register('email', { required: true })} type="email" placeholder="E-mail para Contato" />
        <textarea {...register('message', { required: true })} rows="4" placeholder="Mensagem" />
        <button className="btn icon" type="submit">
          <span>Enviar Mensagem</span>
          <div className="spinner" />
        </button>

        <div className={styles.feedback}>
          <Check />
          <span>Enviado com Sucesso</span>
        </div>
      </form>
    </>
  )
}
