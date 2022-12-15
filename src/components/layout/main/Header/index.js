import React, { useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import Logo from 'public/images/header-logo.svg';
import Link from 'next/link';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { useRouter } from 'next/router';

export default function Header() {
  const nav = useRef();

  const links = [
    {
      name: 'Início',
      url: '/',
    },
    {
      name: 'Sobre Nós',
      url: 'sobre-nos',
    },
    {
      name: 'Serviços',
      url: 'servicos',
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
      url: '/blog',
    },
  ];

  useEffect(() => {
    require('bootstrap/js/dist/collapse');

    if (router.route !== '/') return;

    function handleCollapse(e) {
      if (e.type === 'show.bs.collapse') {
        nav.current?.classList.add(styles.active);
      } else {
        nav.current?.classList.remove(styles.active);
      }
    }

    nav.current?.addEventListener('show.bs.collapse', handleCollapse);
    nav.current?.addEventListener('hide.bs.collapse', handleCollapse);

    return () => {
      nav.current?.removeEventListener('show.bs.collapse', handleCollapse);
      nav.current?.removeEventListener('hide.bs.collapse', handleCollapse);
    }
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (router.route !== '/') {
      nav.current.classList.add(styles.active);
      nav.current.closest('header').style.position = 'sticky';
      return;
    }

    function handleScroll() {
      if (window.scrollY > 48) {
        nav.current?.classList.add(styles.active);
      } else {
        nav.current?.classList.remove(styles.active);
      }
    }

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.navbar}>
      <nav ref={nav}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.navbarInner}>
                <Link href="/#">
                  <a className="link-image">
                    <Logo />
                  </a>
                </Link>
                <ul className={`${styles.links} collapse`} id="navbar">
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
                    <Link href="/contato">
                      <a className="btn">Fale Conosco</a>
                    </Link>
                  </li>
                </ul>
                <button className="btn small" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                  |||
                </button>
                <Link href="/contato">
                  <a className="btn">Fale Conosco</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
