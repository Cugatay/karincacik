import clsx from 'clsx';
import React from 'react';
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
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={clsx(styles.avatar, answered && styles.answeredAvatar)}>
          <p>A</p>

          <div className={styles.answered}>
            <img alt="cevaplandı" src="/icons/done.svg" />
          </div>
        </div>

        <div className={styles.title}>
          Tarantula Nasıl Bulabilirim
          Tarantula Nasıl Bulabilirim Tarantula
          Nasıl Bulabilirim Tarantula Nasıl Bulabilirim Tarantula Nasıl Bulabilirim
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.answerCount}>15 Yanıt</div>

        <div className={styles.issues}>
          <div className={styles.tag}>...</div>
          <div className={styles.tag}>Konu Dışı</div>
          <div className={styles.tag}>Peygamber Devesi</div>
          <div className={styles.tag}>Tür Sorgulama</div>
        </div>
      </div>
    </div>
  );
}

QuestionItem.defaultProps = {
  answered: false,
};
