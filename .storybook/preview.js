import { addDecorator } from '@storybook/react';
import React from 'react';
import StoryWrapper from '../stories/StoryWrapper/StoryWrapper';

addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>);
