import { useEffect } from 'react';
import styles from './PopUp.module.scss';
import Close from 'public/images/icons/xmark-solid.svg';
import Link from 'next/link';
import Title from '../Title';

export default function PopUp({ content }) {

  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.nfShowPopup) {
        document.querySelector('#popup').showModal();
      }
    }, 5000);
  }, []);

  return (
    <dialog id="popup" className={styles.popUp} onClose={() => localStorage.setItem('nfShowPopup', true)}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-10 mx-auto">
            <div className={styles.dialogContent}>
              <button title="Fechar" type="button" className={styles.close} onClick={e => e.target.closest('dialog').close()}>
                <Close />
              </button>
              <img className={styles.circle} src="/images/popup/circle.png" layout="fill" alt="" />
              <img className={styles.lines} src="/images/popup/lines.png" layout="fill" alt="" />
              <img className={styles.machine} src="/images/popup/machine.png" layout="fill" alt="" />
              <div>
                <Title variant="light" align="start" content={{ title: 'Hemodiafiltração de Alto Volume', overline: 'Disponível na Nefrosinos!' }} />
                <p>A terapia dialítica mais eficaz da atualidade.</p>
                <p>Semelhante à Hemodiálise, ela promove melhor qualidade de vida aos pacientes, através de inúmeros benefícios.</p>
                <Link href="/contato#info-contato">
                  <a onClick={e => e.target.closest('dialog').close()} className="btn pink icon">Fale Conosco</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}
