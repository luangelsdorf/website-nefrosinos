import React from 'react';
import PostCard from 'src/components/blog/PostCard';
import styles from './FilteredPosts.module.scss';

export default function FilteredPosts({ posts, category }) {
  return (
    <div className={styles.section}>
      <h1>{category}</h1>
      <div className="container">
        <div className="row" style={{ rowGap: '80px' }}>
          {posts.length > 0 ? (
            posts.map(post => (
              <PostCard key={post.id} {...post.attributes} />
            ))
          ) : (
            <h3 style={{ textAlign: 'center' }}>Nenhum resultado encontrado.</h3>
          )}
        </div>
      </div>
    </div>
  )
}
