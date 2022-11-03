import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';
import { apiURL } from 'src/utils/env';
import styles from './Footer.module.scss';

export default function Footer({ content }) {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className={styles.textContent}>
              <Image
                src={apiURL + content.logo.data.attributes.url}
                width={content.logo.data.attributes.width}
                height={content.logo.data.attributes.height}
                alt="Logo da NefroSinos"
              />
              <p>{content.text}</p>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className={styles.links}>
              <div>
                <h2>Sobre Nós</h2>
                <ul>
                  <li>
                    <Link href="/sobre-nos"><a>Apresentação</a></Link>
                  </li>
                  <li>
                    <Link href="/sobre-nos"><a>Norteadores</a></Link>
                  </li>
                  <li>
                    <Link href="/sobre-nos"><a>História</a></Link>
                  </li>
                  <li>
                    <Link href="/sobre-nos"><a>Certificados</a></Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Serviços</h2>
                <ul>
                  <li>
                    <Link href="/servicos"><a>Diálise em Trânsito</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos"><a>Diálise Peritoneal</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos"><a>Hemodiálise</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos"><a>Hemodiafiltração</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos"><a>Tratamento Conservador</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos"><a>Transplante</a></Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Links Úteis</h2>
                <ul>
                  <li>
                    <Link href="/servicos"><a>Estrutura</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos"><a>Equipe</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos"><a>Convênios</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos"><a>Fale Conosco</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos"><a>Trabalhe Conosco</a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
