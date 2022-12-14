import Image from 'next/future/image';
import React from 'react';
import TeamCarousel from 'src/components/common/TeamCarousel';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import styles from './OurTeam.module.scss';

export default function OurTeam({ content, team }) {

  const spec = content.specialists;
  const sliceIndex = Math.ceil(spec.length / 2);

  const firstHalf = spec.slice(0, sliceIndex);
  const secondHalf = spec.slice(sliceIndex);

  const Specialist = props => {
    return (
      <div className={styles.spec}>
        <Image src={apiURL + props.icon.data.attributes.url} width="80" height="80" alt="" />
        <div className={styles.info}>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.section}>
      <Title content={content.title} variant="dark" />
      <div className={styles.mainSection}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className={styles.specList}>
                {
                  firstHalf.map(card => (
                    <Specialist {...card} key={card.id} />
                  ))
                }
              </div>
            </div>

            <div className="col-12 col-lg-4 d-none d-lg-block">
              <div className={styles.centerImage}>
                <Image
                  src={apiURL + content.image.data.attributes.url}
                  width={content.image.data.attributes.width}
                  /* height={content.image.data.attributes.height} */
                  height="600"
                  alt="Especialista da Nefrosinos"
                />
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className={styles.specList}>
                {
                  secondHalf.map(card => (
                    <Specialist {...card} key={card.id} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <TeamCarousel team={team} />
    </div>
  )
}
