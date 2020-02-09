import { addDecorator } from '@storybook/react';
import * as React from 'react';
import StoryWrapper from '../stories/StoryWrapper/StoryWrapper';

addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>);
