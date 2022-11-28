import React from 'react';
import PostList from 'src/components/blog/PostList';
import styles from './RecentPosts.module.scss';

export default function RecentPosts({ posts }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-10 mx-auto">
            <PostList title="Publicações Recentes" posts={posts} />
          </div>
        </div>
      </div>
    </div>
  )
}
