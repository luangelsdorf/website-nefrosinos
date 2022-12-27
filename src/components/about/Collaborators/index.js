import React from 'react';
import MemberCard from 'src/components/common/MemberCard';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Collaborators.module.scss';

export default function Collaborators({ content }) {

  const firstHalf = content.slice(0, content.length / 2);
  const secondHalf = content.slice(content.length / 2);


  return (
    <div className={styles.section}>
      <Swiper
        spaceBetween={24}
        slidesPerView="auto"
        modules={[Autoplay]}
        loop
        speed={1800}
        autoplay={{
          delay: 200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {
          firstHalf.map(member => (
            <SwiperSlide key={member.id}>
              <div>
                <MemberCard photo={member.photo} name={member.role} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        spaceBetween={24}
        slidesPerView="auto"
        modules={[Autoplay]}
        loop
        speed={1800}
        autoplay={{
          reverseDirection: true,
          delay: 200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {
          secondHalf.map(member => (
            <SwiperSlide key={member.id}>
              <div>
                <MemberCard photo={member.photo} name={member.role} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
