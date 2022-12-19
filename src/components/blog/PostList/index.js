import Link from 'next/link';
import React from 'react';
import PostCard from '../PostCard';
import styles from './PostList.module.scss';

export default function PostList({ posts, title }) {
  return (
    <div className={styles.section}>
      {
        title && (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <header>
                  <h2>{title}</h2>
                  <Link href="/categorias">
                    <a className="btn dark icon">
                      Ver Lista Completa
                    </a>
                  </Link>
                </header>
              </div>
            </div>
          </div>
        )
      }

      <div className="row">
        <div className="col-12">
          <div className="row" style={{ rowGap: '80px' }}>
            {
              posts.map(post => (
                <PostCard key={post.id} {...post.attributes} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
