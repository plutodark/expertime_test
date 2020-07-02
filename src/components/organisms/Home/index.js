import React from 'react';
import Block from '../../atoms/Block';
import Header from '../../molecules/Header';
import Cover from '../../molecules/Cover';
import ContentBlocks from '../../molecules/ContentBlocks';
import First from '../First';
import Second from '../Second';
import Third from '../Third';
import Footer from '../Footer';
import './style.scss';

const Home = () => {
  const contents = [First(), Second(), Third()];
  return (
    <>
      <Cover />
      <ContentBlocks contents={contents} />
      <Footer />
      <Header />
    </>
  );
};

export default Home;
