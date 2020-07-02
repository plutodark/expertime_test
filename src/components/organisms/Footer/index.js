import React from 'react';
import Icon from '../../atoms/Icon';
import './style.scss';

const Footer = () => {
  const Left = () => (
    <div className='footer--black--left'>
      <div className='footer--black--title'>Des cocktails dans votre boîte mail !</div>
      <div className='footer--black--text'>Nos recettes, nos conseils et nos histoires tous les mois.</div>
      <div className='footer--black--left--input'>
        <input placeholder='Votre adresse mail ...' />
        <div className='footer--black--left--input--button'>Je m’inscris</div>
      </div>
    </div>
  );
  const VerticalDivider = () => (<div className='footer-black--vertical-divider' />);
  const SocialButton = ({ icon, text }) => (
    <div className='social-button'>
      <Icon size={20}>{icon}</Icon>
      <div className='social-button--text'>{text}</div>
    </div>
  );
  const Right = () => (
    <div className='footer--black--right'>
      <div className='footer--black--title'>Rejoignez-nous</div>
      <div className='footer--black--text'>Nos recettes, nos conseils et nos histoires tous les mois.</div>
      <div className='footer-black--right--social'>
        <SocialButton icon='facebook' text='Facebook' />
        <SocialButton icon='instagram' text='Instagram' />
      </div>
    </div>
  );
  const FooterGrey = () => (
    <div className='footer--grey'>
      <div>CGU</div>
      <div>Mentions légales</div>
      <div>Cookies</div>
    </div>
  );
  const FooterBlack = () => (
    <div className='footer--black'>
      <div className='footer--black--container'>
        <Left />
        <Right />
      </div>
      <VerticalDivider />
    </div>

  );
  return (
    <div className='footer'>
      <FooterBlack />
      <FooterGrey />
    </div>
  );
};

export default Footer;
