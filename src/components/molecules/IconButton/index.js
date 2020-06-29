import React from 'react';
import Icon from '../../atoms/Icon';
import './style.scss';


const IconButton = (props) => {
  const {icon, onClick} = props;
  return (
    <div onClick={onClick}>
      <Icon className='icon-button--icon' isHoverable {...props}>{icon}</Icon>
    </div>
  );
}
export default IconButton;
