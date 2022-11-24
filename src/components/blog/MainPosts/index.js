import React from 'react';
import PostCard from '../PostCard';
import styles from './MainPosts.module.scss';

export default function MainPosts({ posts }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-10 mx-auto">
            <div className="row" style={{ rowGap: '80px' }}>
              {
                posts.map((post, index) => (
                  <PostCard key={post.id} {...post.attributes} nthChild={index} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
