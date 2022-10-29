import React from 'react';
import MemberCard from 'src/components/common/MemberCard';
import Title from 'src/components/common/Title';
import { Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './OurTeam.module.scss';

export default function OurTeam({ content, team }) {
  return (
    <div className={styles.section}>
      <Title title={content.title.title} overline={content.title.overline} variant="dark" />
      <div className="container">
        <Swiper
          spaceBetween={24}
          slidesPerView="auto"
          modules={[Autoplay, FreeMode]}
          loop
          speed={1800}
          freeMode
          autoplay={{
            delay: 200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {
            team.team.map(member => (
              <SwiperSlide>
                <div>
                  <MemberCard photo={member.photo} name={member.name} speciality={member.speciality} />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}
