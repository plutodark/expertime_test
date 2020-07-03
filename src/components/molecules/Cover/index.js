import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Icon from '../../atoms/Icon';
import './style.scss';

const Cover = () => {
  const [isMouseOver, setMouseOver] = useState(false);
  const coverStyle = useSpring({
    backgroundSize: isMouseOver ? 'auto 105%' : 'auto 100%',
    opacity: 1,
    from: {opacity: 0.5},
    config: { duration: 1000 }
  });
  const CoverTitle = () => (
    <div className='cover--title'>
       L’experience cocktail <br />à la maison
    </div>
  );
  const CoverSubtitle = () => (
    <div className='cover--subtitle'>
      Opn, votre bar connecté à domicile
    </div>
  );
  const CoverText = () => (
    <div className='cover--text'>
      Le premier bar connecté qui vous permet de créer des centaines de cocktails à la maison en s’amusant.
    </div>
  );
  const CoverLink = ({content}) => (
    <div className='cover--link'>
      {content}
    </div>
  );
  const CoverButton = () => (
    <div className='cover--button'>
      <div>Découvrir le starter pack</div>
    </div>
  );
  return (
    <div
      className='cover'
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div className='cover--container'>
        <CoverTitle />
        <div>
          <CoverSubtitle />
          <CoverText />
          <CoverLink content={<><Icon>play</Icon><div className='cover--link--text'>Découvrir OPN en détails - 1’40</div></>}/>
          <CoverButton />
          <CoverLink content={'Déja OPNer ? Rechargez votre bar.'} />
        </div>
      </div>
      <animated.div className='cover--image' style={coverStyle} />
    </div>
  );
};
export default Cover;
