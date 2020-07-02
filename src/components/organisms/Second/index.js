import React, { useState, useContext } from 'react';

import { SizeContext } from '../../../contexts/SizeContext';
import Desktop from './desktop';
import Mobile from './mobile';
import './style.scss';

const Second = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isMobile, isTablet } = useContext(SizeContext);
  return isMobile || isTablet ? (<Mobile selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />)
    : (<Desktop selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />);
}

export default Second;
