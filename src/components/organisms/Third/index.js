import React from 'react';
import _ from 'lodash';
import Block from '../../atoms/Block';
import firstImageSrc from './third-first.png';
import secondImageSrc from './third-second.png';
import thirdImageSrc from './third-third.png';
import fourthImageSrc from './third-fourth.png';
import alcoholSrc from './alcohol.png';
import Icon from '../../atoms/Icon';
import './style.scss';

const Third = () => {
  const SectionTitle = ({ children }) => (<div className='third--section-title'>{children}</div>);
  const Section = ({ children }) => <div className='third--section-items'>{children.map((content, index) => (<div key={index}>{content}</div>))}</div>;
  const SectionButton = ({ children }) => (<div className='third--section-button'>{children}</div>);
  const SectionDivider = () => (<div className='third--section-divider' />);
  const firstSectionContent = _.times(4, (index) => (
    <div key={index} className='third--section-item'>
      <div className='third--section-item--title'>
        Cocktails
      </div>
      <div className='third--section-item--content'>
        {'Une histoire amère (qui finit bien)'}
      </div>
    </div>
  ));
  const IconWithText = ({ icon, text }) => (
    <div>
      <Icon>{icon}</Icon>
      <div className='third--section--group-icons--text'>{text}</div>
    </div>
  );
  const GroupIcons = () => (
    <div className='third--section--group-icons'>
      <div>
        <div><img src={alcoholSrc} alt='alcohol' /></div>
        <div className='third--section--group-icons--text'>Absolut</div>
      </div>
      <IconWithText icon='sugar' text='Sucré' />
      <IconWithText icon='herb' text='Herbacé' />
    </div>
  );
  const SecondSectionContent = ({ src, title }) => (
    <div>
      <img src={src} alt={src}/>
      <div>{title}</div>
      <GroupIcons />
    </div>
  );
  const secondSectionContents = [
    SecondSectionContent({src: firstImageSrc, title: 'Martinez'}),
    SecondSectionContent({src: secondImageSrc, title: 'Martinez'}),
    SecondSectionContent({src: thirdImageSrc, title: 'Martinez'}),
    SecondSectionContent({src: fourthImageSrc, title: 'Martinez'}),
  ];
  return (
    <Block
      title='Besoin d’inspiration pour votre prochaine soirée maison ?'
      subtitle='Des centaines de recettes ou idées à découvrir sur notre application ou sur notre magazine'
    >
      <SectionTitle>Les derniers articles</SectionTitle>
      <Section>{firstSectionContent}</Section>
      <SectionButton>Voir plus de publications</SectionButton>
      <SectionDivider />
      <SectionTitle>Notre selection de cocktails</SectionTitle>
      <Section>{secondSectionContents}</Section>
      <SectionButton>Voir plus de recettes</SectionButton>
    </Block>
  );
};
export default Third;
