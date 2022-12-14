import React from 'react';
import styles from './ReferencePopUp.module.scss';

export default function ReferencePopUp({ content }) {

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
                <h3>Valores de Referência para a TFG estimada pelo CKD-EPI</h3>
                <dl>
                  <div className={styles.item}>
                    <dt>Normal</dt>
                    <dd>90 ml/min x 1,73m 2 (Estádio G1)</dd>
                  </div>
                  <div className={styles.item}>
                    <dt>Normal</dt>
                    <dd>90 ml/min x 1,73m 2 (Estádio G1)</dd>
                  </div>
                  <div className={styles.item}>
                    <dt>Normal</dt>
                    <dd>90 ml/min x 1,73m 2 (Estádio G1)</dd>
                  </div>
                  <div className={styles.item}>
                    <dt>Normal</dt>
                    <dd>90 ml/min x 1,73m 2 (Estádio G1)</dd>
                  </div>
                  <div className={styles.item}>
                    <dt>Normal</dt>
                    <dd>90 ml/min x 1,73m 2 (Estádio G1)</dd>
                  </div>
                  <div className={styles.item}>
                    <dt>Normal</dt>
                    <dd>90 ml/min x 1,73m 2 (Estádio G1)</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}
