import React, { useState, useContext } from 'react';
import { useSpring, animated} from 'react-spring';
import { SizeContext } from '../../../contexts/SizeContext';
import Logo from '../../atoms/Logo';
import Icon from '../../atoms/Icon';
import './hamburger.scss';
import './style.scss';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useContext(SizeContext);
  const menuWidth = width - 70;
  const menuStyle = useSpring({ width: isOpen ? menuWidth : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`, opacity: isOpen ? 1 : 0 });
  const renderButton = () => (
    <div className={'mobile-menu--button'}>
      <button className={`hamburger hamburger--collapse ${isOpen && 'is-active'}`} type="button" onClick={() => setIsOpen(!isOpen)}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    </div>
  );
  const Divider = () => (
    <div className='mobile-menu--divider'/>
  );
  const ShortDivider = () => (
    <div className='mobile-menu--short-divider' />
  );
  const MenuTitle = ({ text }) => (
    <div className='mobile-menu--menu--item mobile-menu--menu--title'>
      {text}
      <Icon>slash</Icon>
    </div>
  );
  const MenuItem = ({ text }) => (
    <div className='mobile-menu--menu--item  mobile-menu--menu--nav'>
      {text}
    </div>
  );
  const renderMenu = () => (
    <animated.div className='mobile-menu--menu' style={menuStyle}>
      <div className='mobile-menu--menu--item'>
        <Logo />
      </div>
      <Divider />
      <MenuTitle text='La Boutique' />
      <MenuItem text='Cartouches' />
      <MenuItem text='Le bar connecté' />
      <MenuItem text='Accessoires' />
      <ShortDivider />
      <MenuTitle text='Le Média' />
      <MenuItem text='Recevoir' />
      <MenuItem text='Food' />
      <MenuItem text='Cocktails' />
    </animated.div>
  );
  const renderBackground = () => (<div className={'mobile-menu--background'} onClick={() => setIsOpen(!isOpen)}/>);
  return (
    <div className={'mobile-menu'}>
      {isOpen && renderBackground()}
      {renderMenu()}
      {renderButton()}
    </div>
  );
};

export default MobileMenu;
