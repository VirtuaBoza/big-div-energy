import { Box } from 'big-div-energy';
import React from 'react';

export default {
  title: 'Box',
  component: Box,
};

const content =
  'This content is in a box. The box has no margin and provides padding on all sides.';

export const Default = () => <Box>{content}</Box>;

export const WithSpacing = () => <Box spacing="large">{content}</Box>;

export const WithUnevenSpacing = () => (
  <Box spacing={[['small', 'large']]}>{content}</Box>
);

export const WithSteppedSpacing = () => (
  <Box spacing={['none', 'small', 'large']}>{content}</Box>
);

export const WithAlignment = () => <Box alignment="center">{content}</Box>;

const MyOtherBox = ({ children }) => (
  <div>I'm some other box, and here are my children: {children}</div>
);

export const WithCustomType = () => <Box type={MyOtherBox}>{content}</Box>;

export const WithAnonymousType = () => (
  <Box
    type={({ children }) => (
      <div>I'm anonymous, and here are my children: {children}</div>
    )}
  >
    {content}
  </Box>
);
