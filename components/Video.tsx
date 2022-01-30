import React from 'react';
import styles from '../styles/components/Video.module.scss';

export default function Video() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img className={styles.thumbnail} alt="thumbnail" src="https://i.ytimg.com/vi/4mSIQgQue7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCypn8UisozfIuEUkuMoqPEg_mK6Q" />
        <button type="button" className={styles.play}>
          <img src="/icons/play.svg" alt="oynat" />
        </button>
      </div>

      <div className={styles.info}>
        <div className={styles.header}>#KÇ5 KELEPİR GECKO TERARYUMU - KARGO AÇILIM VE</div>
        <div className={styles.description}>Kaldigimiz yerden devam! Bu bölümde transfer ettiğimiz Camponotus Sanctus kolonisini, Burak ve Fahriye için aldiğimiz yeni / geniş teraryumu ve basitçe kargo açilimi izleyecekseniz. Umarim beğenirsiniz. İyi seyirler!</div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInfo}>
          <img src="/icons/view.svg" alt="izlenme" />
          <div>132.000</div>
        </div>

        <div className={styles.bottomInfo}>
          <img src="/icons/thumb_up.svg" alt="beğeni" />
          <div>32K</div>
        </div>
      </div>
    </div>
  );
}
