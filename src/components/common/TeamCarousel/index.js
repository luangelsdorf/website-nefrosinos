import React from 'react';
import styles from './TeamCarousel.module.scss';
import { Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MemberCard from '../MemberCard';

export default function TeamCarousel({ team }) {
  return (
    <div className={styles.carousel}>
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
