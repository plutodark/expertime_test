import React from 'react';
import { useTransition, animated } from 'react-spring';
import IconButton from '../../../molecules/IconButton';
import './style.scss';

const Slider = ({ selectedIndex, contents, onSetIndex }) => {
  const handleLeftClick = () => {
    if (selectedIndex <= 0) {
      return null;
    }
    return onSetIndex(selectedIndex - 1);
  };
  const handleRightClick = () => {
    if (selectedIndex >= contents.length - 1) {
      return null;
    }
    return onSetIndex(selectedIndex + 1);
  };
  const renderContents = contents.map((content, index) => ({style}) => (
    <animated.div style={{ ...style }} key={index}>
      {content}
    </animated.div>
  ));
  const transitions = useTransition(selectedIndex, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)', display: 'none' },
  })
  const LeftButton = () => (
    <div className='slider--left-button'>
      <IconButton
        icon='left'
        onClick={handleLeftClick}
      />
    </div>
  );
  const RightButton = () => (
    <div className='slider--right-button'>
      <IconButton
        icon='right'
        onClick={handleRightClick}
      />
    </div>
  );
  return (
    <div className='slider'>
    {transitions.map(({ item, props, key }) => {
      const Page = renderContents[item];
      return <Page key={key} style={props} />;
    })}
      {LeftButton()}
      {RightButton()}
    </div>
  );
};

export default Slider;
