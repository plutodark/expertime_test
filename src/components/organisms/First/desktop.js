import React from 'react';
import Icon from '../../atoms/Icon';
import PlayerImage from './Player.png';
import './desktop.scss';

const Desktop = () => {
  const GridItem = ({icon, children}) => (
    <div className='first-block--grid--item'>
      <Icon color='orange'>{icon}</Icon>
      <div className='first-block--grid--item--text'>{children}</div>
    </div>
  );
  return (
    <div className='first-block--grid'>
      <div className='first--left-grid'>
        <GridItem icon='cocktail'>
          Des recettes à découvrir et personnaliser en fonction de vos goûts
        </GridItem>
        <GridItem icon='jigger'>
          Des dosages précis pour réaliser vos cocktails favoris
        </GridItem>
        <GridItem icon='world'>
          Des alcools reconnus mondialement
        </GridItem>
      </div>
      <img className={'first--image'} src={PlayerImage} alt='first' />
      <div className='first--right-grid'>
        <GridItem icon='refill'>
          Une gestion et un réapprovisionnement facilité de votre bar
        </GridItem>
        <GridItem icon='shield'>
          Un accès contrôlé et sécurisé à vos alcools préférés
        </GridItem>
        <GridItem icon='interior'>
          Un design moderne et élégant s’intégrant dans votre quotidien
        </GridItem>
      </div>
    </div>
  );
}
export default Desktop;
