import React from 'react';
import _ from 'lodash';
import T from 'prop-types';
import classnames from 'classnames';
import iconMap from './iconMap';
import './style.scss';


const Icon = ({ children, className, color, isHoverable, size }) => {
  const TargetIcon = iconMap[children];
  const colorClassName = _.isEmpty(color) ? '' : `icon--${color}`;
  const combinedClassName = classnames('icon', className, colorClassName, isHoverable ? 'icon--hoverable' : '');
  return (<TargetIcon className={combinedClassName} />);
};

Icon.defaultProps = {
  children: 'home',
  color: '',
  isHoverable: false,
};

Icon.propTypes = {
  children: T.string,
  color: T.string,
  isHoverable: T.bool,
};
export default Icon;
