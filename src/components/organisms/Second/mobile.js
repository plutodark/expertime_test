import React from 'react';
import _ from 'lodash';
import Block from '../../atoms/Block';
import backgroundSrc from './contentBackground.png';
import iphoneSrc from './iphone.png';
import googlePlaySrc from './GooglePlay.png';
import appStoreSrc from './AppStore.png';

import './mobile.scss';

const Mobile = ({selectedIndex, setSelectedIndex}) => {
  const menuTitle = [
    'Des idées selon vos envies',
    'Des recommandations personnalisées',
    '+ 300 recettes exclusives',
    'Des recettes pas à pas',
  ];

  const Box = ({ title, content, index }) => {
    const CollapseButton = () => (
      <div onClick={() =>setSelectedIndex(index)}>
        {selectedIndex === index ? '-' : '+'}
      </div>
    );
    return (
      <div className='second--box'>
        <div className='second--box--title'><div>{title}</div><CollapseButton /></div>
        {selectedIndex === index && content}
      </div>
    );
  };
  const contents = _.times(4, () => (
    <div className='second--content'>
      <div className='second--content--image'>
        <img className='second--content--background' src={backgroundSrc} alt='background' />
        <img className='second--content--iphone' src={iphoneSrc} alt='iphone' />
      </div>
      <div className='second--content--text'>
        <div className='second--content--text--title'>TROUVEZ LES COCKTAILS REALISABLES AVEC LES INGREDIENTS DISPONIBLES CHEZ VOUS</div>
        <div className='second--content--text--content'>Nous nous sommes tous déjà retrouvés à la maison avec l’envie de prendre un verre sans la motivation pour faire des courses. Avec la fonctionnalité « Frigo », il suffit de rentrer les ingrédients disponibles chez vous et l’application vous trouvera tous les cocktails réalisables sans sortir de chez vous ! Pour aller plus loin, l’app vous recommandera aussi les ingrédients qui vous manquent pour débloquer toujours plus de recettes.</div>

      </div>
    </div>
  ));
  const SocialButtons = () => <div className='second--social-buttons'><img src={googlePlaySrc} alt='google play' /><img src={appStoreSrc} alt='App Store' /></div>;
  return (
    <Block title='Vos cocktails favoris à réaliser à la maison grâce à l’app Cocktails/Opn !'>
      <SocialButtons />
      {menuTitle.map((title, index) => <Box key={index} title={title} index={index} content={contents[index]}/>)}
    </Block>
  );
};

export default Mobile;
