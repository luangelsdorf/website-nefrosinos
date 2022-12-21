import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';
import { apiURL } from 'src/utils/env';
import styles from './FooterLinks.module.scss';

export default function FooterLinks({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 col-xl-5">
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
          <div className="col-12 col-lg-8 col-xl-7">
            <div className={styles.links}>
              <div>
                <h2>Sobre Nós</h2>
                <ul>
                  <li>
                    <Link href="/sobre-nos#"><a>Apresentação</a></Link>
                  </li>
                  <li>
                    <Link href="/sobre-nos#proposito"><a>Norteadores</a></Link>
                  </li>
                  <li>
                    <Link href="/sobre-nos#linha-do-tempo"><a>História</a></Link>
                  </li>
                  <li>
                    <Link href="#certificados"><a>Certificados</a></Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Serviços</h2>
                <ul>
                  <li>
                    <Link href="/servicos#hemodiálise"><a>Hemodiálise</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos#hemodiafiltração"><a>Hemodiafiltração</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos#dialise-em-transito"><a>Diálise em Trânsito</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos#diálise-peritoneal"><a>Diálise Peritoneal</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos#tratamento-conservador"><a>Tratamento Conservador</a></Link>
                  </li>
                  <li>
                    <Link href="/servicos#transplante"><a>Transplante</a></Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Links Úteis</h2>
                <ul>
                  <li>
                    <Link href="/servicos#estrutura"><a>Estrutura</a></Link>
                  </li>
                  <li>
                    <Link href="/#equipe"><a>Equipe</a></Link>
                  </li>
                  <li>
                    <Link href="/#convenios"><a>Convênios</a></Link>
                  </li>
                  <li>
                    <Link href="/contato"><a>Fale Conosco</a></Link>
                  </li>
                  {/* <li>
                    <Link href="/servicos"><a>Trabalhe Conosco</a></Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
