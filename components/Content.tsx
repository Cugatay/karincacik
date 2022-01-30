import { motion } from 'framer-motion';
import React from 'react';
import styles from '../styles/components/Content.module.scss';

interface Props {
    title: string;
    // eslint-disable-next-line no-undef
    children: JSX.Element;
}

export default function Content({ children, title }: Props) {
  return (
    <motion.div
    //   drag="y"
    //   dragConstraints={{
    //     left: 0, right: 0, top: 0, bottom: 0,
    //   }}
      className={styles.content}
    >
      <div className={styles.header}>{title}</div>

      <div className={styles.blogContainer}>
        {children}
      </div>
    </motion.div>
  );
}
