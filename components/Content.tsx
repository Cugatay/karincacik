import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from '../styles/components/Content.module.scss';
import useIsMobile from '../hooks/useIsMobile';

interface Props {
    title: string;
    scrollable?: boolean;
    // eslint-disable-next-line no-undef
    children: JSX.Element;
    aos: {anim: string, delay: number, duration?: number};
}

export default function Content({
  children, title, scrollable, aos,
}: Props) {
  const isMobile = useIsMobile();

  const [isScrolled, setIsScrolled] = useState(false);
  const scrollableRef = useRef<any>();

  const handleScrollRight = () => {
    scrollableRef?.current?.scrollBy({
      top: 0,
      left: 2000,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (typeof scrollableRef?.current !== 'undefined') {
      scrollableRef.current.addEventListener('scroll', (e: any) => {
        if (e.target.scrollLeft > 25) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });
    }
  }, [scrollableRef]);

  return (
  // <Tilt options={{ scale: 1, max: 2 }}>
  // <Tilt
  //   tiltMaxAngleX={0}
  //   tiltMaxAngleY={0}
  //   scale={1.05}
  //   glareEnable
  //   glareMaxOpacity={0.9}
  //   glareColor="lightblue"
  //   glarePosition="all"
  //   className={styles.tilt}
  // >
    <div
      data-aos={aos.anim}
      data-aos-delay={aos.delay}
      data-aos-duration={aos.duration}
      className={styles.content}
    >
      {/* <Tilt glareEnable glareMaxOpacity={0.9}
      glareColor="lightblue" glarePosition="all" tiltEnable={false}> */}
      <div className={styles.header}>{title}</div>

      <div
        ref={scrollableRef}
        className={clsx(styles.itemContainer, scrollable && !isMobile && styles.scrollable)}
      >
        {children}
      </div>

      {
          scrollable && !isMobile
        && <button type="button" onClick={handleScrollRight} className={clsx(styles.arrow, isScrolled && styles.scrolledArrow)}><img src="/icons/chevron_right.svg" alt="daha fazla" /></button>
        }
    </div>
  // </Tilt>
  );
}

Content.defaultProps = {
  scrollable: false,
};
