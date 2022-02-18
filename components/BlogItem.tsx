import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import styles from '../styles/components/BlogItem.module.scss';
import useIsMobile from '../hooks/useIsMobile';

interface Props {
  index: number;
  selected: number | null;
  // eslint-disable-next-line no-unused-vars
  setSelected: (i: number) => void;
}

export default function BlogItem({ index, selected, setSelected }: Props) {
  const isMobile = useIsMobile();

  const isSelected = selected === index;

  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      animate={isSelected ? { height: isMobile ? 380 : 300, cursor: 'default' } : {}}
      onClick={() => setSelected(index)}
      className={styles.container}
    >
      <Tilt
        className={styles.tilt}
        // tiltReverse
        // glareEnable
        // glareMaxOpacity={0.1}
        // glareColor="lightblue"
        // glarePosition="all"
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        // scale={1.05}
      >
        <div className={styles.left} id={!isSelected ? 'not_selected' : null}>
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Brachypelma_smithi_2009_G03.jpg/1200px-Brachypelma_smithi_2009_G03.jpg"
            alt="Blog"
            animate={isSelected ? { width: 180, height: 180, marginLeft: isMobile ? 0 : '20px' } : {}}
          />
          <motion.div className={styles.info} animate={isSelected ? { marginLeft: isMobile ? 0 : '24px' } : {}}>
            <motion.div animate={isSelected ? { fontSize: '32px', marginTop: isMobile ? '24px' : 0 } : {}} className={styles.title}>Tarantula Gözü</motion.div>
            {isSelected
            && (
            <motion.div
              initial={{ scale: 0, y: 200, opacity: 1 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.author}>
                Yazar: CagatayXx
              </div>
              <div className={styles.text}>
                laksd jflkj lkja lsdkjf lksaj df lksaj
                lkasdflkj alskdjflkasjd lkasjdflk jlksajflkj
              </div>
            </motion.div>
            )}
          </motion.div>
        </div>

        {
        !isMobile
        && (
        <div className={styles.right}>
          <Button isHovering={isHovering} isClicked={isSelected} type="comment" />
          <Button isHovering={isHovering} isClicked={isSelected} type="like" />
        </div>
        )
      }
      </Tilt>
    </motion.div>
  );
}

const Button = ({ isHovering, isClicked, type }: {isHovering: boolean, isClicked: boolean, type: 'like' | 'comment'}) => (
  <motion.button
    animate={isHovering || isClicked ? { width: 100 } : {}}
    // whileHover={{ backgroundColor: 'white', color: 'black' }}
    transition={{ delay: type === 'comment' ? 0.1 : 0 }}
    className={styles.button}
  >
    {
            (isHovering || isClicked)
            && (
            <motion.div
              className={styles.buttonCount}
              initial={{ scale: 0, y: 50 }}
              animate={{ scale: 1, y: 0 }}
            >
              115
            </motion.div>
            )
          }

    {/* <img src={type === 'like' ? '/icons/like_bordered.svg' : '
    /icons/comments_bordered.svg'} alt={type === 'like' ? 'Beğen' : 'Yorumlar'} /> */}

    <div>
      {type === 'like'
        ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
          </svg>
        )
        : (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        )}
    </div>
  </motion.button>
);
