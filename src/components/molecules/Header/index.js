import React, { useContext } from 'react';
import { SizeContext } from '../../../contexts/SizeContext';
import { ScrollContext } from '../../../contexts/ScrollContext';
import Desktop from './desktop';
import Mobile from './mobile';


const Header = () => {
  const { isTablet, isMobile } = useContext(SizeContext);
  const { isTop } = useContext(ScrollContext);
  const isWhite = isTop;
  return isMobile || isTablet ? <Mobile isWhite={isWhite} /> : <Desktop isWhite={isWhite} />;
};


export default Header;
