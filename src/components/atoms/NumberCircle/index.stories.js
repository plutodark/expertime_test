import React from 'react';
import NumberCircle from './';

export default {
  title: 'NumberCircle',
  component: NumberCircle,
};

export const Default = () => <NumberCircle number={1} />;

export const White = () => <div style={{ background: 'black' }}><NumberCircle isWhite number={100} /></div>;
