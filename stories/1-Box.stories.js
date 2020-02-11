import { Box } from 'big-div-energy';
import React from 'react';

export default {
  title: 'Box',
  component: Box,
};

const content =
  'This content is in a box. The box has no margin and provides equal padding on all sides.';

export const Default = () => <Box>{content}</Box>;

export const WithPadding = () => <Box padding="large">{content}</Box>;

export const WithSteppedPadding = () => (
  <Box padding={['none', 'small', 'large']}>{content}</Box>
);
