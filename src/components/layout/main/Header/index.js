import React, { useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import Logo from 'public/images/header-logo.svg';
import Link from 'next/link';
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
      url: '/sobre-nos',
      dropLinks: [
        {
          name: 'Apresentação',
          url: '/sobre-nos#',
        },
        {
          name: 'Norteadores',
          url: '/sobre-nos#proposito',
        },
        {
          name: 'História',
          url: '/sobre-nos#linha-do-tempo',
        },
        {
          name: 'Certificados',
          url: '#certificados',
        },
      ]
    },
    {
      name: 'Serviços',
      url: '/servicos',
      dropLinks: [
        {
          name: 'Hemodiálise',
          url: '/servicos#hemodiálise',
        },
        {
          name: 'Hemodiafiltração',
          url: '/servicos#hemodiafiltração',
        },
        {
          name: 'Diálise em Trânsito',
          url: '/servicos#dialise-em-transito',
        },
        {
          name: 'Diálise Peritoneal',
          url: '/servicos#diálise-peritoneal',
        },
        {
          name: 'Tratamento Conservador',
          url: '/servicos#tratamento-conservador',
        },
        {
          name: 'Transplante',
          url: '/servicos#transplante',
        },
      ]
    },
    {
      name: 'Estrutura',
      url: '/estrutura',
    },
    {
      name: 'Equipe',
      url: '/equipe',
    },
    {
      name: 'Convênios',
      url: '/convenios',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
  ];

  const DropDown = ({ links }) => (
    <ul className={styles.dropDown}>
      {
        links.map(link => (
          <li key={link.name}>
            <Link href={link.url}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))
      }
    </ul>
  )

  const router = useRouter();

  useEffect(() => {
    const Collapse = require('bootstrap/js/dist/collapse');
    const colNavbar = new Collapse(document.getElementById('navbar'), { toggle: false });

    colNavbar.hide();

    if (router.route !== '/') return;

    function handleCollapse(e) {
      if (e.type === 'show.bs.collapse') {
        nav.current?.classList.add(styles.active);
      } else {
        if (window.scrollY < 48) {
          nav.current?.classList.remove(styles.active);
        }
      }
    }

    nav.current?.addEventListener('show.bs.collapse', handleCollapse);
    nav.current?.addEventListener('hide.bs.collapse', handleCollapse);

    return () => {
      nav.current?.removeEventListener('show.bs.collapse', handleCollapse);
      nav.current?.removeEventListener('hide.bs.collapse', handleCollapse);
    }
  }, [router.route, router.asPath]);

  useEffect(() => {
    if (router.route !== '/') {
      nav.current.classList.add(styles.active);
      return;
    }

    function handleScroll() {
      if (window.scrollY > 48) {
        nav.current?.classList.add(styles.active);
      } else {
        nav.current?.classList.remove(styles.active);
      }
    }

    handleScroll();

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [router.route]);

  return (
    <header className={styles.navbar}>
      <nav ref={nav}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.navbarInner}>
                <Link href="/">
                  <a className="link-image">
                    <Logo />
                  </a>
                </Link>
                <ul className={`${styles.links} collapse`} id="navbar">
                  {
                    links.map(link => (
                      <li key={link.name} data-dropdown={!!link.dropLinks}>
                        <Link href={link.url}>
                          <a>{link.name}</a>
                        </Link>
                        {
                          link.dropLinks ? (
                            <DropDown links={link.dropLinks} />
                          ) : null
                        }
                      </li>
                    ))
                  }
                  <li>
                    <Link href="/contato">
                      <a className="btn pink">Fale Conosco</a>
                    </Link>
                  </li>
                </ul>
                <button className="btn small" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                  <span>|||</span>
                </button>
                <Link href="/contato">
                  <a className="btn pink">Fale Conosco</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
