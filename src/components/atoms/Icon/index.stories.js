import React from 'react';
import Icon from './';

export default {
  title: 'Icon',
  component: Icon,
};

export const Default = () => <Icon>home</Icon>;

export const White = () => <div style={{ background: 'black' }}><Icon color='white'>home</Icon></div>;
export const Orange = () => <Icon color='orange'>home</Icon>;
