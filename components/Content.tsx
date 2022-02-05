import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from '../styles/components/Content.module.scss';
import useIsMobile from '../hooks/useIsMobile';

interface Props {
    title: string;
    scrollable?: boolean;
    // eslint-disable-next-line no-undef
    children: JSX.Element;
}

export default function Content({ children, title, scrollable }: Props) {
  const isMobile = useIsMobile();

  const [isScrolled, setIsScrolled] = useState(false);
  const scrollableRef = useRef<any>();

  const handleScrollRight = () => {
    scrollableRef?.current?.scrollBy({
      top: 0,
      left: 400,
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
    <div
      className={styles.content}
    >
      <div className={styles.header}>{title}</div>

      <div
        ref={scrollableRef}
        className={clsx(styles.itemContainer, scrollable && styles.scrollable)}
      >
        {children}
      </div>

      {
          scrollable && !isMobile
        && <button type="button" onClick={handleScrollRight} className={clsx(styles.arrow, isScrolled && styles.scrolledArrow)}><img src="/icons/chevron_right.svg" alt="daha fazla" /></button>
        }
    </div>
  );
}

Content.defaultProps = {
  scrollable: false,
};
