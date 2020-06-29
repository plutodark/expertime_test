import React from 'react';
import classnames from 'classnames';
import Icon from '../../atoms/Icon';
import NumberCircle from '../../atoms/NumberCircle';
import './style.scss';


const NumberIconButton = (props) => {
  const {icon, number, onClick ,color} = props;
  const isWhite = color === 'white';
  const combinedClassName = classnames('number-icon-button', isWhite ? 'number-icon-button--white' : '');

  return (
    <div className={combinedClassName} onClick={onClick}>
      <Icon className='icon-button--icon' isHoverable color={color}>{icon}</Icon>
      <NumberCircle number={number} isWhite={isWhite}/>
    </div>
  );
}
export default NumberIconButton;
