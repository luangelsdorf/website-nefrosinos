import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';
import { apiURL } from 'src/utils/env';
import { getExcerpt } from 'src/utils/helpers';
import styles from './PostCard.module.scss';
import Arrow from 'public/images/icons/arrow-right.svg';

export default function PostCard(props) {

  const first = props.nthChild === 0;

  return (
    <div className={`col-12 ${first ? '' : 'col-lg-6'}`}>
      <article className={styles.card} data-first={first || undefined}>
        <div className={styles.badge}>
          <Link href={`/categorias/${'props.category.slug'}`}>
            <a className="btn small">{'props.category.name'}</a>
          </Link>
        </div>

        <Link href={props.slug}>
          <a className={`link-image ${styles.thumbnail}`}>
            <div>
              <Image fill src={apiURL + props.cover.data.attributes.url} alt="Thumbnail" />
            </div>
          </a>
        </Link>

        <div className={styles.body}>
          <Link href={props.slug}>
            <a className="link-image">
              <h3>{props.title}</h3>
            </a>
          </Link>
          <p>
            {props.body ? getExcerpt(props.body) : null}
          </p>
          <Link href={props.slug}>
            <a>
              Ler Mais <Arrow />
            </a>
          </Link>
        </div>
      </article>
    </div>
  )
}
