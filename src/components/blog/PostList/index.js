import Link from 'next/link';
import React from 'react';
import PostCard from '../PostCard';
import styles from './PostList.module.scss';

export default function PostList({ posts, title }) {
  return (
    <div className={styles.section}>
      {
        title && (
          <header>
            <h2>{title}</h2>
            <Link href="/categorias">
              <a className="btn dark icon">
                Ver Lista Completa
              </a>
            </Link>
          </header>
        )
      }

      <div className="row" style={{ rowGap: '80px' }}>
        {
          posts.map(post => (
            <PostCard key={post.id} {...post.attributes} />
          ))
        }
      </div>
    </div>
  )
}
