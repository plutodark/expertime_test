import React, { useState } from 'react';
import _ from 'lodash';
import Block from '../../atoms/Block';
import NavButton from '../../atoms/NavButton';
import Slider from './Slider';
import iphoneSrc from './iphone.png';
import googlePlaySrc from './GooglePlay.png';
import appStoreSrc from './AppStore.png';

import './style.scss';

const Second = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const Menu = () => {
    const menuTitle = [
      'Des idées selon vos envies',
      'Des recommandations personnalisées',
      '+ 300 recettes exclusives',
      'Des recettes pas à pas',
    ];
    const renderTitles = () => menuTitle.map((text, index) => (
      <NavButton
        key={index}
        className='second--menu--title--item'
        onClick={() => setSelectedIndex(index)}
        selected={index === selectedIndex}
      >
        {text}
      </NavButton>
    ));
    return (
      <div className='second--menu--title'>
        {renderTitles()}
      </div>
    );
  };
  const Divider = () => (<div className='second--content--divider' />);
  const contents = _.times(4, () => (
    <div className='second--content'>
      <div className='second--content--skew'><div className='second--content--skew--skew' /></div>
      <img className='second--content--iphone' src={iphoneSrc} alt='iphone' />
      <div className='second--content--text'>
        <div className='second--content--text--title'>TROUVEZ LES COCKTAILS REALISABLES AVEC LES INGREDIENTS DISPONIBLES CHEZ VOUS</div>
        <div className='second--content--text--content'>Nous nous sommes tous déjà retrouvés à la maison avec l’envie de prendre un verre sans la motivation pour faire des courses. Avec la fonctionnalité « Frigo », il suffit de rentrer les ingrédients disponibles chez vous et l’application vous trouvera tous les cocktails réalisables sans sortir de chez vous ! Pour aller plus loin, l’app vous recommandera aussi les ingrédients qui vous manquent pour débloquer toujours plus de recettes.</div>
        <div className='second--content--text--image'><img src={googlePlaySrc} alt='google play' /><img src={appStoreSrc} alt='App Store' /></div>
      </div>
    </div>
  ));
  return (
    <Block title='Vos cocktails favoris à réaliser à la maison grâce à l’app Cocktails/Opn !'>
      <Menu />
      <Divider />
      <Slider
        selectedIndex={selectedIndex}
        contents={contents}
        onSetIndex={setSelectedIndex}
      />
    </Block>
  );
};

export default Second;
