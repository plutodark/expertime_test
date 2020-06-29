import React from 'react';
import Icon from './';

export default {
  title: 'Icon',
  component: Icon,
};

export const Default = () => <Icon>home</Icon>;

export const White = () => <div style={{ background: 'black' }}><Icon color='white' isHoverable>home</Icon></div>;
export const Orange = () => <Icon color='orange' isHoverable>home</Icon>;
export const Search = () => <Icon color='orange'>search</Icon>;
export const Cart = () => <Icon color='orange'>cart</Icon>;
export const Slash = () => <Icon color='orange'>slash</Icon>;
export const User = () => <Icon color='orange'>user</Icon>;
