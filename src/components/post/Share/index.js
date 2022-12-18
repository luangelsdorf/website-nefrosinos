import React from 'react';
import ShareUrl from 'share-url';
import styles from './Share.module.scss';
import Facebook from 'public/images/icons/facebook.svg';
import WhatsApp from 'public/images/icons/whatsapp.svg';
import Twitter from 'public/images/icons/twitter.svg';
import ShareDots from 'public/images/icons/share-dots.svg';

export default function Share({ slug, postTitle }) {

  const linkAttributes = {
    className: 'btn icon-only pink',
    target: '_blank',
    rel: 'noopener noreferrer',
  }

  const postURL = `https://nefrosinos.com.br/blog/posts/${slug}`;

  return (
    <div className={styles.section}>
      <h2>Compartilhe esse Post</h2>
      <menu>
        <li>
          <a {...linkAttributes} href={ShareUrl.facebook({ u: postURL })}>
            <Facebook />
          </a>
        </li>
        <li>
          <a {...linkAttributes} href={ShareUrl.whatsapp({ text: postURL })}>
            <WhatsApp />
          </a>
        </li>
        <li>
          <a {...linkAttributes} href={ShareUrl.twitter({ url: postURL })}>
            <Twitter />
          </a>
        </li>
        <li>
          <button {...linkAttributes} type="button" onClick={() => navigator.share({url: postURL, title: postTitle})}>
            <ShareDots />
          </button>
        </li>
      </menu>
    </div>
  )
}
