import React from 'react';
import styles from './ReferencePopUp.module.scss';
import Close from 'public/images/icons/xmark-solid.svg';
import Link from 'next/link';
import Arrow from 'public/images/icons/arrow-right.svg';

export default function ReferencePopUp({ content }) {

  const keyframes = [
    { opacity: 0, transform: 'scale(0.90)' },
    { opacity: 1 },
    { transform: 'scale(1)' },
  ];

  function hideDialog({ target }) {
    const dialog = target.closest('dialog');
    dialog.classList.add(styles.backdropFade);
    dialog.animate(keyframes, { direction: 'reverse', easing: 'ease-in', duration: 350, }).finished.then(() => {
      dialog.close();
      dialog.classList.remove(styles.backdropFade);
    });
  }

  function showDialog({ target }) {
    const dialog = target.nextElementSibling;
    dialog.animate(keyframes, { easing: 'ease-out', duration: 350, });
    dialog.showModal();
  }

  return (
    <>
      <div role="button" onClick={showDialog}>Confira aqui a tabela completa com valores de referência.</div>

      <dialog className={styles.dialog} id="modal">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-10 mx-auto">
              <div className={styles.dialogContent}>
                <button title="Fechar" type="button" className={styles.close} onClick={hideDialog}>
                  <Close />
                </button>
                <h3>{content.title}</h3>
                <dl>
                  {
                    content.referenceValues.map(val => (
                      <div className={styles.item} key={val.id}>
                        <dt>{val.title}</dt>
                        <dd>{val.text}</dd>
                      </div>
                    ))
                  }
                </dl>
                <p>
                  É fundamental que o resultado seja avaliado por um especialista da área para garantir o melhor uso dessa informação.&nbsp;
                  <Link href="/contato">
                    <a>Fale Conosco <Arrow /></a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}
