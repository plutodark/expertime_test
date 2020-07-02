import React, { useContext } from 'react';
import { SizeContext } from '../../../contexts/SizeContext';
import Block from '../../atoms/Block';
import Desktop from './desktop';
import Mobile from './mobile';

const First = () => {
  const { isMobile, isTablet } = useContext(SizeContext);

  return (
    <Block title='Redécouvrez le plaisir d’une soirée cocktails à la maison'>
      {isMobile || isTablet ? <Mobile /> : <Desktop />}
    </Block>
  );
}
export default First;
