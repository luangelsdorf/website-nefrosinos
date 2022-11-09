import React from 'react';
import TeamCarousel from 'src/components/common/TeamCarousel';
import styles from './OurTeam.module.scss';

export default function OurTeam({ content, team }) {
  return (
    <div className={styles.section}>
      <Title title={content.title.title} overline={content.title.overline} variant="dark" />
      <TeamCarousel team={team} />
    </div>
  )
}
