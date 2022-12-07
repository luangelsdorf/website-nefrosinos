import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Banner from 'src/components/common/Banner';
import { apiURL } from 'src/utils/env';
import styles from './HeroSlider.module.scss';

export default function HeroSlider({ content }) {
  const [active, setActive] = useState(null);
  const [direction, setDirection] = useState('left');

  function nextSlide() {
    setDirection('left')
    let newActive = content[content.indexOf(active) + 1];
    if (newActive === undefined) {
      newActive = content[0]
    }
    setActive(newActive);
  }

  function prevSlide() {
    setDirection('right');
    let newActive = content[content.indexOf(active) - 1];
    if (newActive === undefined) {
      newActive = content[content.length - 1];
    }
    setActive(newActive);
  }

  function handleClick(e) {
    if (e.currentTarget.classList.contains('left')) {
      prevSlide();
    } else {
      nextSlide();
    }
  }

  useEffect(() => {
    if (!active) return;

    document.querySelectorAll(`.${styles.slider} section`).forEach(banner => {
      banner.classList.remove('active');
      banner.classList.remove('swipe-right');
      banner.classList.remove('swipe-left');
    });
    document.getElementById(active?.id)?.classList?.add(`swipe-${direction}`);
    document.getElementById(active?.id)?.classList?.add('active');
  }, [active]);

  /* useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10100);

    return () => clearInterval(interval);
  }, [active]); */

  return (
    <section className={styles.slider}>
      {
        content.map((banner, index) => {
          return (
            <Banner id={banner.id} key={banner.id} cover={apiURL + banner.cover.data.attributes.url} className={index === 0 ? 'active' : undefined}>
              <div className="row">
                <div className="col-12 col-xl-10 mx-auto">
                  <div className={styles.bannerContent}>
                    <h1>{banner.title}</h1>
                    <p>{banner.text}</p>
                    <div className={styles.buttons}>
                      <Link href={banner.button1.url}>
                        <a className="btn icon">{banner.button1.text}</a>
                      </Link>
                      {banner.button2.url && banner.button2.text && (
                        <Link href={banner.button2.url}>
                          <a className="btn light">{banner.button2.text}</a>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Banner>
          );
        })
      }
      {/* <div>
        <button className="btn left" onClick={() => prevSlide()}>{'<-'}</button>
        <button className="btn right" onClick={() => nextSlide()}>{'->'}</button>
      </div> */}
    </section>
  )
}
