import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const NavButton = ({ children, color, className }) => {
  const colorClassName = `nav-button--color-${color}`;
  const combinedClassName = classnames('nav-button', colorClassName ,className);
  return (
    <div className={combinedClassName}>
      <div className='nav-button--text'>{children}</div>
      <div className='nav-button--underline'/>
    </div>
  );
}

NavButton.defaultProps = {
  color: 'black',
  children: '',
  className: '',
};
NavButton.propTypes = {
  color: T.string,
  children: T.node,
  className: T.string,
};
export default NavButton;
