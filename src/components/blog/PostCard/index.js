import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';
import { apiURL } from 'src/utils/env';
import { getExcerpt } from 'src/utils/helpers';
import styles from './PostCard.module.scss';
import Arrow from 'public/images/icons/arrow-right.svg';

export default function PostCard(props) {
  const category = props.categories.data[0].attributes;

  const first = props.nthChild === 0;

  return (
    <div className={`col-12 ${first ? '' : `col-lg-${props.size ?? 6}`}`}>
      <article className={styles.card} data-first={first || undefined}>
        {/* <div className={styles.badge}>
          <Link href={`/categorias/${category.slug}`}>
            <a className="btn small">{category.name}</a>
          </Link>
        </div> */}

        <Link href={`/blog/posts/${props.slug}`}>
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
          <Link href={`/blog/posts/${props.slug}`}>
            <a>
              Ler Mais <Arrow />
            </a>
          </Link>
        </div>
      </article>
    </div>
  )
}
