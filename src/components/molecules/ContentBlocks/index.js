import React from 'react';
import './style.scss';

const ContentBlocks = ({ contents }) => {
  const contentDivs = () => contents.map((content, index) => (
    <div className={'content-blocks--block'} key={`block${index}`}>
      {content}
    </div>
  ));
  return (
    <div className='content-blocks'>
      {contentDivs()}
    </div>
  );
};
export default ContentBlocks;
