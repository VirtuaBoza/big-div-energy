import * as React from 'react';
import './StoryWrapper.scss';

const StoryWrapper = ({ children }) => {
  return <div className="story-wrapper">{children}</div>;
};

export default StoryWrapper;
