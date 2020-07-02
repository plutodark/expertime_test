import React from 'react';
import Icon from '../../atoms/Icon';
import './style.scss';
const Divider = () => <div className='block--divider'><Icon>slash</Icon></div>;

const Block = ({ title, children, subtitle }) => (
  <div className='block'>
    <Divider />
    <div className='block--title'>{title}</div>
    <div className='block--subtitle'>{subtitle}</div>
    <div className='block--content'>{children}</div>
  </div>
);

export default Block;
