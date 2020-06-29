import React from 'react';
import Logo from '../../atoms/Logo';
import IconButton from '../../molecules/IconButton';
import NumberIconButton from '../../molecules/NumberIconButton';
import './mobile.scss';

const Mobile = ({ isWhite }) => {
  const renderMenu = () => (
    <div className='header--mobile--menu'>
      Menu
    </div>
  );
  const renderLogo = () => (
    <div className='header--mobile--logo'><Logo isWhite={isWhite} /></div>
  );
  const renderIconButton = (icon) => (<IconButton icon={icon} color={isWhite ? 'white' : 'black'}/>);
  const renderNumberIconButton = (icon, number) => (<NumberIconButton icon={icon} color={isWhite ? 'white' : 'black'} number={number} />);
  const renderButtonGroups = () => (
    <div className='header--mobile--right-buttons'>
      {renderIconButton('search')}
      {renderIconButton('user')}
      {renderNumberIconButton('cart', 1)}
    </div>
  );
  return (
    <div className='header--mobile'>
      {renderLogo()}
      {renderButtonGroups()}
      {renderMenu()}
    </div>
  );
};

export default Mobile;
