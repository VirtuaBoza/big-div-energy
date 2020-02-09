import * as React from 'react';
import './StoryWrapper.scss';

export interface StoryWrapperProps {}

const StoryWrapper: React.SFC<StoryWrapperProps> = ({ children }) => {
  return <div className="story-wrapper">{children}</div>;
};

export default StoryWrapper;
