import React from 'react';
import TeamCarousel from 'src/components/common/TeamCarousel';
import Title from 'src/components/common/Title';
import styles from './OurTeam.module.scss';

export default function OurTeam({ content, team }) {
  return (
    <div className={styles.section}>
      <Title content={content.title} variant="dark" />
      <TeamCarousel team={team} />
    </div>
  )
}
