import React from 'react';
import Logo from '../../atoms/Logo';
import IconButton from '../../molecules/IconButton';
import NumberIconButton from '../../molecules/NumberIconButton';
import MobileMenu from '../../molecules/MobileMenu';
import './mobile.scss';

const Mobile = ({ isWhite }) => {
  const renderMenu = () => (
    <div className='header--mobile--menu'>
      <MobileMenu isWhite={isWhite} />
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
    <div className={`header ${!isWhite && 'header--white'}`}>
      <div className='header--mobile'>
        {renderLogo()}
        {renderButtonGroups()}
        {renderMenu()}
      </div>
    </div>
  );
};

export default Mobile;
