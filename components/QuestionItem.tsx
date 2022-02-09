import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
// import useIsMobile from '../hooks/useIsMobile';
import styles from '../styles/components/QuestionItem.module.scss';

// Types on karincaciftligim.com
// Karıncalar: Karıncalar hakkında her şey
//    --> -Formikaryum ve Yaşam Alanları- -Tür Sorgulama- -Karınca Rehberi-
// Eklembacaklılar: Mantis(Peygamber Devesi), Tarantula
// Sürüngenler: Yılan, Kertenkele, Diğer
// Akvaryum: Tuzlu Su, Tatlı Su
// Yem: Canlı yemler hakkında rehberler ve tartışmalar
// Konu dışı: Egzotik hayvanlar dışında her şey

// -------------------------
// Formikaryum
// Tür Sorgulama
// Karınca
// Peygamber Devesi
// Tarantula
// Yılan
// Kertenkele
// Akvaryum
// Yem
// Diğer Canlılar
// Konu Dışı
// -------------------------

interface Props {
  answered?: boolean;
}

export default function QuestionItem({ answered }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const tags = ['...', 'Tür Sorgulama', 'Peygamber Devesi', 'Konu Dışı'];
  // const isMobile = useIsMobile();

  return (
    <motion.div
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      className={styles.container}
    >
      <div className={styles.left}>
        <div className={clsx(styles.avatar, answered && styles.answeredAvatar)}>
          <p>A</p>

          {
            answered
            && (
            <motion.div
              animate={isHovering ? { opacity: 1, scale: 1, marginBottom: 0 } : {}}
              className={styles.answered}
            >
              <img alt="cevaplandı" src="/icons/done.svg" />
            </motion.div>
            )
          }

        </div>

        <div className={styles.title}>
          Tarantula Nasıl Bulabilirim
          Tarantula Nasıl Bulabilirim Tarantula
          Nasıl Bulabilirim Tarantula Nasıl Bulabilirim Tarantula Nasıl Bulabilirim
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.answerCount}>15 Yanıt</div>

        <motion.div
          className={styles.issues}
          // initial={{ y: 40 }}
          // animate={isHovering ? { y: 0 } : {}}
          // transition={{ bounce: 20 }}
        >
          {tags.map((item, index) => (
            <Tag text={item} isHovering={isHovering} index={tags.length - index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

interface TagProps {
  text: string;
  isHovering: boolean;
  index: number;
}

function Tag({ text, isHovering, index }: TagProps) {
  return (
    <motion.div
      initial={{
        scale: 0, marginTop: -50, y: 200, opacity: 0,
      }}
      animate={isHovering ? {
        scale: 1, marginTop: 0, y: 0, opacity: 1,
      } : {}}
      transition={isHovering ? { delay: /* 0.05 +*/ index * 0.065 } : {}}
      className={styles.tag}
    >
      {text}
    </motion.div>
  );
}

QuestionItem.defaultProps = {
  answered: false,
};
