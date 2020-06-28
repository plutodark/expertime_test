import React from 'react';
import Logo from './';

export default {
  title: 'Logo',
  component: Logo,
};

export const Default = () => <Logo />;

export const White = () => <div style={{ background: 'black' }}><Logo isWhite /></div>;
