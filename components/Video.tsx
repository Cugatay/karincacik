import React, { useState } from 'react';
import styles from '../styles/components/Video.module.scss';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={styles.container}
    >
      <div className={styles.top}>
        <div className={styles.thumbnail}>
          {
            !isPlaying
              ? <img alt="thumbnail" src="https://i.ytimg.com/vi/4mSIQgQue7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCypn8UisozfIuEUkuMoqPEg_mK6Q" />

              : <iframe width="853" height="480" src="https://www.youtube.com/embed/4mSIQgQue7E?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          }
        </div>

        {
          !isPlaying
          && (
          <button type="button" className={styles.play} onClick={() => setIsPlaying(true)}>
            <img src="/icons/play.svg" alt="oynat" />
          </button>
          )
        }
      </div>

      <div style={{
        display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <div className={styles.info}>
          <div className={styles.header}>#KÇ5 KELEPİR GECKO TERARYUMU - KARGO AÇILIM VE</div>
          {/* eslint-disable-next-line max-len */}
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
    </div>
  );
}
