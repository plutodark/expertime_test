import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Block from '../../atoms/Block';
import Icon from '../../atoms/Icon';
import PlayerImage from './Player.png';
import './mobile.scss';

const Mobile = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const GridItem = ({icon, children}) => (
    <div className='first-block--grid--item'>
      <Icon color='orange'>{icon}</Icon>
      <div className='first-block--grid--item--text'>{children}</div>
    </div>
  );
  const items = [(
    <GridItem icon='cocktail'>
      Des recettes à découvrir et personnaliser en fonction de vos goûts
    </GridItem>
  ), (
    <GridItem icon='jigger'>
      Des dosages précis pour réaliser vos cocktails favoris
    </GridItem>
  ), (
    <GridItem icon='world'>
      Des alcools reconnus mondialement
    </GridItem>
  ), (
    <GridItem icon='refill'>
      Une gestion et un réapprovisionnement facilité de votre bar
    </GridItem>
  ), (
    <GridItem icon='shield'>
      Un accès contrôlé et sécurisé à vos alcools préférés
    </GridItem>
  ), (
    <GridItem icon='interior'>
      Un design moderne et élégant s’intégrant dans votre quotidien
    </GridItem>
  )];
  const renderContents = items.map((content, index) => ({style}) => (
    <animated.div style={{ ...style }} key={index}>
      {content}
    </animated.div>
  ));
  const Menu = () => (
    <div className='first--menu'>
    {items.map((item, index) => (
      <div
        className={`first--menu--item ${index === selectedIndex && 'selected'}`}
        onClick={() => setSelectedIndex(index)}
      />
    ))}
    </div>
  );
  const transitions = useTransition(selectedIndex, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)', display: 'none' },
  })
  return (
    <>
      <img className={'first--image'} src={PlayerImage} alt='first' />
      {transitions.map(({ item, props, key }) => {
        const Page = renderContents[item];
        return <Page key={key} style={props} />;
      })}
      <Menu />
    </>
  );
}
export default Mobile;
