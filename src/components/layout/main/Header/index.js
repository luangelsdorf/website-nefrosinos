import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import Logo from 'public/images/header-logo.svg';
import Link from 'next/link';
import Image from 'next/future/image';
import useMediaQuery from 'src/hooks/useMediaQuery';

export default function Header() {

  const links = [
    {
      name: 'Início',
      url: '#',
    },
    {
      name: 'Sobre Nós',
      url: '#',
    },
    {
      name: 'Serviços',
      url: '#',
    },
    {
      name: 'Estrutura',
      url: '#',
    },
    {
      name: 'Equipe',
      url: '#',
    },
    {
      name: 'Convênio',
      url: '#',
    },
    {
      name: 'Blog',
      url: '#',
    },
  ];

  useEffect(() => {
    const bsCollapse = require('bootstrap/js/dist/collapse');
    console.log(bsCollapse);
  }, []);

  const isMobile = useMediaQuery('lg');

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarInner}>
          <Link href="/#">
            <a className="link-image">
              <Logo />
            </a>
          </Link>
          <ul className={`${styles.links} collapse ${isMobile ? '' : 'show'}`} id="navbar">
            {
              links.map(link => (
                <li key={link.name} onClick={() => document.querySelector('[data-bs-target="#navbar"]').click()}>
                  <Link href={link.url}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))
            }
            <li>
              <Link href="#contato">
                <a className="btn">Fale Conosco</a>
              </Link>
            </li>
          </ul>
          <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
            |||
          </button>
          <Link href="#contato">
            <a className="btn">Fale Conosco</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
