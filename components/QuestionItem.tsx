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
  selected: number | null;
  // eslint-disable-next-line no-unused-vars
  setSelected: (i: number) => void;
  index: number;
}

export default function QuestionItem({
  answered, selected, setSelected, index,
}: Props) {
  const [hovering, setHovering] = useState(false);
  const tags = ['Tür Sorgulama', 'Peygamber Devesi', 'Konu Dışı', '...'];
  // const isMobile = useIsMobile();
  const isSelected = selected === index;
  const isHovering = isSelected || hovering;

  return (
    <motion.div
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      className={styles.container}
      animate={isSelected ? { height: 284 } : {}}
      onClick={() => setSelected(index)}
    >
      <div className={styles.top}>
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
            className={styles.tagContainer}
          >
            {tags.map((item, i) => (
              <Tag text={item} isHovering={isHovering} index={tags.length - i} />
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ y: 200, opacity: 0, scale: 0 }}
        animate={isSelected ? { y: 0, opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.1 }}
        className={styles.description}
      >
        <div className={styles.text}>
          Merhabalar, karınca hobisine başlamak
          istiyorum fakat nereden bulacağımı bilmiyorum.
          Bana biraz yardımcı olursanız çok sevinirim. Ve bulunca
          türünü nasıl belirleyeceğim? Nasıl besleyeceğim? Çocuklarımız püskevit
          yiyemeyecek mi? Eightborn ne zaman açılacak? Dolar kaç tl olacak? Dolar kuru
          ve dolar arasındaki fark nedir? Geçtiğimiz ay en çok kazandıran altcoin hangisi
          oldu? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna a
        </div>
      </motion.div>

      <motion.div
        // initial={{
        //   scale: 0, y: 200, opacity: 0,
        // }}
        // animate={{
        //   scale: 1, y: 0, opacity: 1,
        // }}
        // transition={{ delay: 1, duration: 0.6 }}
        className={styles.tagContainer}
        initial={{
          scale: 0, y: 200, opacity: 0,
        }}
        animate={isHovering ? {
          scale: 1, y: 0, opacity: 1,
        } : {}}
        transition={isHovering ? { delay: /* 0.05 +*/ 0.15 } : {}}
      >
        {tags.map((item) => (
          <div className={styles.tag}>
            {/* # */}
            {item}
          </div>
        ))}

        {/* {tags.map((item, i) => (
          <Tag text={item} isHovering={isHovering} index={i + 2} />
        ))} */}
      </motion.div>

      <motion.div
        // initial={{ y: 50, opacity: 0 }}
        // animate={isSelected ? { y: 0, opacity: 1 } : {}}
        // transition={{ delay: 0.2, duration: 0.6 }}
        className={styles.bottom}
      >
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={isSelected ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className={styles.answerCount}
        >
          15 Yanıt
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={isSelected ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className={styles.link}
        >
          <div>Soruya Git</div>
          <img src="/icons/double_arrow.svg" alt="soruya git" />
        </motion.div>
      </motion.div>
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
