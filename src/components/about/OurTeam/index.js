import React from 'react';
import MemberCard from 'src/components/common/MemberCard';
import Section from 'src/components/common/Section';
import Title from 'src/components/common/Title';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Collaborators from '../Collaborators';
import styles from './OurTeam.module.scss';

export default function OurTeam({ content, team }) {

  const spec = content.infoCards;
  const sliceIndex = Math.ceil(spec.length / 2);

  const firstHalf = spec.slice(0, sliceIndex);
  const secondHalf = spec.slice(sliceIndex);

  const Specialist = props => {
    return (
      <div className={styles.spec}>
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
          <div className="row justify-content-center">
            <div className="col-12 col-lg-4 d-none d-lg-block">
              <div className={`${styles.specList} ${styles.first}`}>
                {
                  firstHalf.map(card => (
                    <Specialist {...card} key={card.id} />
                  ))
                }
              </div>
            </div>

            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
              <div className={styles.centerImage}>
                <Swiper
                  spaceBetween={24}
                  modules={[Autoplay, Pagination]}
                  pagination={{
                    enabled: true,
                    type: 'fraction',
                  }}
                  autoplay
                >
                  {
                    team.team.map(member => (
                      <SwiperSlide key={member.name}>
                        <div style={{ height: '100%' }}>
                          <MemberCard photo={member.photo} name={member.name} speciality={member.speciality} />
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            </div>

            <div className="col-12 col-lg-4 d-none d-lg-block">
              <div className={`${styles.specList} ${styles.second}`}>
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
      {/* <TeamCarousel team={team} /> */}
      <Section id="colaboradores">
        <Collaborators content={team.collaborators} />
      </Section>
    </div>
  )
}
