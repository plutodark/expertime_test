import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const NavButton = ({ children, color, className, selected, onClick }) => {
  const colorClassName = `nav-button--color-${color}`;
  const combinedClassName = classnames('nav-button', selected ? 'nav-button--selected' : '',colorClassName ,className);
  return (
    <div className={combinedClassName} onClick={onClick}>
      <div className='nav-button--text'>{children}</div>
      <div className='nav-button--underline'/>
    </div>
  );
}

NavButton.defaultProps = {
  color: 'black',
  children: '',
  className: '',
  onClick: () => {},
  selected: false,
};
NavButton.propTypes = {
  color: T.string,
  children: T.node,
  className: T.string,
  onClick: T.func,
  selected: T.bool,
};
export default NavButton;
