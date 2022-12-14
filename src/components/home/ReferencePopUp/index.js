import React from 'react';
import styles from './ReferencePopUp.module.scss';

export default function ReferencePopUp({ content }) {
  console.log(content);

  const keyframes = [
    { opacity: 0, transform: 'scale(0.90)' },
    { opacity: 1 },
    { transform: 'scale(1)' },
  ];

  function hideDialog({ target }) {
    const dialog = target.closest('dialog');
    dialog.classList.add(styles.backdropFade);
    dialog.animate(keyframes, { direction: 'reverse', easing: 'ease-in', duration: 400, }).finished.then(() => {
      dialog.close();
      dialog.classList.remove(styles.backdropFade);
    });
  }

  function showDialog({ target }) {
    const dialog = target.nextElementSibling;
    dialog.animate(keyframes, { easing: 'ease-out', duration: 400, });
    dialog.showModal();
  }

  return (
    <>
      <a onClick={showDialog} href="#modal">Confira aqui a tabela completa com valores de referência.</a>

      <dialog className={styles.dialog} id="modal">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-10 mx-auto">
              <div className={styles.dialogContent}>
                <button type="button" className={styles.close} onClick={hideDialog}>X</button>
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
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}
