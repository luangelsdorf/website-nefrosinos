import React from 'react';
import PostCard from 'src/components/blog/PostCard';
import Title from 'src/components/common/Title';
import styles from './FilteredPosts.module.scss';

export default function FilteredPosts({ posts, category }) {
  return (
    <div className={styles.section}>
      <h1>{category}</h1>
      <div className="container">
        <div className="row" style={{rowGap: '80px'}}>
          {
            posts.map(post => (
              <PostCard key={post.id} {...post.attributes} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
