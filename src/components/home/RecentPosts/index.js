import React from 'react';
import PostCard from 'src/components/blog/PostCard';
import Title from 'src/components/common/Title';
import styles from './RecentPosts.module.scss';

export default function RecentPosts({ posts, content }) {
  return (
    <div className={styles.section}>
      <Title content={content.title} />
      <div className="container">
        <div className="row">
          {
            posts.map(post => (
              <PostCard key={post.id} size="4" {...post.attributes} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
