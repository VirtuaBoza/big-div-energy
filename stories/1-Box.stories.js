import { Box } from 'big-div-energy';
import React from 'react';

export default {
  title: 'Box',
  component: Box,
};

const content =
  'This content is in a box. The box has no margin and provides equal padding on all sides.';

export const Default = () => <Box>{content}</Box>;

export const WithSpacing = () => <Box spacing="large">{content}</Box>;

export const WithSteppedSpacing = () => (
  <Box spacing={['none', 'small', 'large']}>{content}</Box>
);
