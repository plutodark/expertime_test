import React from 'react';
import T from 'prop-types';
import IconButton from '../../molecules/IconButton';
import NumberIconButton from '../../molecules/NumberIconButton';
import Logo from '../../atoms/Logo';
import NavButton from '../../atoms/NavButton';
import './desktop.scss';

const Header = ({ isWhite }) => {
  const renderIconButton = (icon) => (<IconButton icon={icon} color={isWhite ? 'white' : 'black'}/>);
  const renderNumberIconButton = (icon, number) => (<NumberIconButton icon={icon} color={isWhite ? 'white' : 'black'} number={number} />);
  const renderHomeButton = () => renderIconButton('home');
  const renderNavButton = ({ text }) => (
    <NavButton color={isWhite ? 'white': 'black'}>
      {text}
    </NavButton>
  );
  const renderLeftMenu = () => (
    <div className='header--left-menu'>
      {renderNavButton({ text: 'Le bar connecté'})}
      {renderNavButton({ text: 'Cartouches'})}
      {renderNavButton({ text: 'Accessoires'})}
    </div>
  );
  const renderLogo = () => <div className='header--logo'><Logo isWhite={isWhite} /></div>;
  const renderRightMenu = () => (
    <div className='header--right-menu'>
      {renderNavButton({ text: 'Cocktails'})}
      {renderNavButton({ text: 'Food'})}
      {renderNavButton({ text: 'Recevoir'})}
    </div>
  );

  const renderRightButtonsGroup = () => (
    <div className='header--right-buttons'>
      {renderIconButton('search')}
      {renderIconButton('user')}
      {renderNumberIconButton('cart', 1)}
    </div>
  );
  return (
    <div className='header'>
      <div className='header--desktop'>
        <div className={'header--left'}>
          {renderHomeButton()}
          {renderLeftMenu()}
        </div>
        {renderLogo()}
        <div className='header--right'>
          {renderRightMenu()}
          {renderRightButtonsGroup()}
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  isWhite: false,
};
Header.propTypes = {
  isWhite: T.bool,
}

export default Header;
