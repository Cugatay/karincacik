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
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const blogs = isMobile ? data.slice(0, 3) : data;

  return (
    <div style={{ paddingTop: 200 }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div data-aos="fade-down">
          <Content aos={{ anim: 'flip-left', delay: 0 }} title="Bloglar">
            <>
              {
            blogs.map((item, index) => (
              <BlogItem index={index} selected={selectedBlog} setSelected={setSelectedBlog} />
            ))
          }
            </>
          </Content>

        </div>

        <Content aos={{ anim: 'fade-up', delay: 100 }} scrollable title="Videolar">
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

        <Content aos={{ anim: 'fade-up', delay: 0, duration: 500 }} title="Sorular">
          <>
            {
              [0, 1, 2].map((item, index) => (
                <QuestionItem
                  answered={item === 1}
                  selected={selectedQuestion}
                  setSelected={setSelectedQuestion}
                  index={index}
                  key={item}
                />
              ))
            }
          </>
        </Content>
      </main>
    </div>
  );
}
