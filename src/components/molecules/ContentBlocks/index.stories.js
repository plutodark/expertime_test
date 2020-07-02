import React from 'react';
import ContentBlocks from './';

export default {
  title: 'ContentBlocks',
  component: ContentBlocks,
};
const contents = [<div>test 1</div>, <div>test 2</div>, <div>test 3</div>];
export const Default = () => <ContentBlocks contents={contents} />;
