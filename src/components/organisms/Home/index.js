import React from 'react';
import Block from '../../atoms/Block';
import Header from '../../molecules/Header';
import Cover from '../../molecules/Cover';
import ContentBlocks from '../../molecules/ContentBlocks';
import First from '../First';
import Second from '../Second';
import './style.scss';

const Home = () => {
  const third = () => (<Block title={'third'}>third</Block>);
  const contents = [First(), Second(), third()];
  return (
    <>
      <Cover />
      <ContentBlocks contents={contents} />
      <Header />
    </>
  );
};

export default Home;
