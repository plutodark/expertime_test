import React from 'react';
import NumberIconButton from './';

export default {
  title: 'NumberIconButton',
  component: NumberIconButton,
};

export const Default = () => <NumberIconButton icon='home' number={1} />;
export const White = () => <div style={{ background: 'red' }}><NumberIconButton icon='home' number={1} color={'white'} /></div>;
