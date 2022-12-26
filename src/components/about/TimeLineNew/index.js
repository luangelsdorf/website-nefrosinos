import React, { useEffect } from 'react';
import styles from './TimeLineNew.module.scss';
import Point from 'public/images/icons/tl-point.svg';
import FirstLine from 'public/images/timeline/line-first.svg';
import Left from 'public/images/timeline/left.svg';
import Right from 'public/images/timeline/right.svg';
import LastLine from 'public/images/timeline/line-last.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useMediaQuery from 'src/hooks/useMediaQuery';
import StraightLine from 'public/images/timeline/straight-line.svg';
import Title from 'src/components/common/Title';
import { apiURL } from 'src/utils/env';
import Image from 'next/future/image';

export default function TimeLineNew({ content }) {
  const middleMilestones = content.milestones.slice(1, -1);

  const Card = ({ position = 'left', ...props }) => (
    <article className={`${styles.card} ${styles[position]}`}>
      <Point />
      <time dateTime={props.year}>{props.year}</time>
      <div className={styles.info}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </article>
  )

  const isMobile = useMediaQuery('lg');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        start: "top center",
        end: 'bottom center',
        onUpdate: self => {
          self.trigger.setAttribute('stroke-dashoffset', 1 - self.progress.toFixed(3));
          if (self.progress > 0.5) {
            self.trigger.closest('svg').nextElementSibling.classList.add(styles.active);
          } else {
            self.trigger.closest('svg').nextElementSibling.classList.remove(styles.active);
          }
        },
      });
      ScrollTrigger.create({
        trigger: "#first > .fill",
      });

      middleMilestones.forEach((ms, index) => {
        ScrollTrigger.create({
          trigger: `#line-${index} > .fill`,
        });
      });

      if (isMobile) {
        ScrollTrigger.create({
          trigger: "#last > .fill",
        });
      } else {
        ScrollTrigger.create({
          trigger: "#last > .fill",
          onUpdate: self => {
            self.trigger.setAttribute('stroke-dashoffset', `-${1 - self.progress.toFixed(3)}`);
          },
        });
      }
    });

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div className={styles.section}>
      <div className={styles.headingSection}>
        <div className="row">
          <div className="col-12">
            <Title content={content.title} variant="dark" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className={styles.image}>
                <Image
                  src={apiURL + content.image.data.attributes.url}
                  fill
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.timeline}>

        <div className={styles.first}>
          <Point />
          {isMobile ? <StraightLine id="first" /> : <FirstLine />}
          <Card position="right" {...content.milestones[0]} />
        </div>

        <div className={styles.middle}>
          {
            middleMilestones.map((card, index) => {
              let isRight = index % 2;
              return (
                <div key={card.id}>
                  {isRight && !isMobile ? <Right id={`line-${index}`} /> : null}
                  {!isRight && !isMobile ? <Left id={`line-${index}`} /> : null}
                  {isMobile ? <StraightLine id={`line-${index}`} /> : null}
                  <Card position={isRight ? 'right' : 'left'} {...card} />
                </div>
              );
            })
          }
        </div>

        <div className={`${styles.last} ${content.milestones.length % 2 === 1 ? styles.flipped : ''}`}>
          {isMobile ? <StraightLine id="last" /> : <LastLine />}
          <Card position="last" {...content.milestones.at(-1)} />
          <Point />
        </div>

      </div>
    </div>
  )
}
