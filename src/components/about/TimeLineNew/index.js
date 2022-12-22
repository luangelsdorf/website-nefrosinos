import React, { useEffect, useLayoutEffect } from 'react';
import styles from './TimeLineNew.module.scss';
import Point from 'public/images/icons/tl-point.svg';
import FirstLine from 'public/images/timeline/line-first.svg';
import Left from 'public/images/timeline/left.svg';
import Right from 'public/images/timeline/right.svg';
import LastLine from 'public/images/timeline/line-last.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function TimeLineNew({ content }) {
  const middleMilestones = content.milestones.slice(1, -1);

  const Card = ({ position = 'left', ...props }) => (
    <article className={`${styles.card} ${styles[position]}`}>
      <Point />
      <time dateTime={'props.year'}>{props.year}</time>
      <div className={styles.info}>
        <h3>{'props.title'}</h3>
        <p>{'props.text'}</p>
      </div>
    </article>
  )

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
        trigger: "#first",
      });

      middleMilestones.forEach((ms, index) => {
        ScrollTrigger.create({
          trigger: `#line-${index} > .fill`,
        });
      });

      ScrollTrigger.create({
        trigger: "#last",
        onUpdate: self => {
          self.trigger.setAttribute('stroke-dashoffset', `-${1 - self.progress.toFixed(3)}`);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.timeline}>

      <div className={styles.first}>
        <Point />
        <FirstLine />
        <Card position="right" {...content.milestones[0]} />
      </div>

      <div className={styles.middle}>
        {
          middleMilestones.map((card, index) => {
            let isRight = index % 2;
            return (
              <div key={card.id}>
                {isRight ? <Right id={`line-${index}`} /> : <Left id={`line-${index}`} />}
                <Card position={isRight ? 'right' : 'left'} {...card} />
              </div>
            );
          })
        }
      </div>

      <div className={styles.last}>
        <LastLine />
        <Card position="last" {...content.milestones.at(-1)} />
        <Point />
      </div>
    </div>
  )
}
