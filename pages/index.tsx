import React, { useState } from 'react';
import Head from 'next/head';
// import { motion } from 'framer-motion';
// import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/pages/Home.module.scss';
import BlogItem from '../components/BlogItem';
import Content from '../components/Content';
import useIsMobile from '../hooks/useIsMobile';
import Video from '../components/Video';
import QuestionItem from '../components/QuestionItem';

const data = [
  {}, {}, {}, {}, {},
];

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const blogs = isMobile ? data.slice(0, 3) : data;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Content title="Bloglar">
          <>
            {
            blogs.map((item, index) => (
              <BlogItem index={index} selected={selected} setSelected={setSelected} />
            ))
          }
          </>
        </Content>

        <Content scrollable title="Videolar">
          <>
            <Video />

            {
              !isMobile
              && (
              <>
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
              </>
              )
            }
          </>
        </Content>

        <Content title="Sorular">
          <div style={{ width: '100%' }}>
            <QuestionItem answered />
            <QuestionItem />
            <QuestionItem />
          </div>
        </Content>
      </main>
    </div>
  );
}
