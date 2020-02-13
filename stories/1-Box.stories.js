import { Box } from 'big-div-energy';
import React from 'react';

export default {
  title: 'Box',
  component: Box,
};

const style = { backgroundColor: '#B3FFFC' };

const Content = () => (
  <div>
    This content is in a box. The box has no margin and provides padding on all
    sides.
  </div>
);

export const Default = () => (
  <Box style={style}>
    <Content />
  </Box>
);

export const WithSpacing = () => (
  <Box spacing="large" style={style}>
    <Content />
  </Box>
);

export const WithUnevenSpacing = () => (
  <Box spacing={[['small', 'large']]} style={style}>
    <Content />
  </Box>
);

export const WithSteppedSpacing = () => (
  <Box spacing={['none', 'small', 'large']} style={style}>
    <Content />
  </Box>
);

export const WithAlignment = () => (
  <Box alignment="center" style={style}>
    <Content />
  </Box>
);

const MyOtherBox = ({ children, ...rest }) => (
  <div {...rest}>I'm some other box, and here are my children: {children}</div>
);

export const WithCustomType = () => (
  <Box type={MyOtherBox} style={style}>
    <Content />
  </Box>
);

export const WithCustomTypeRenderPropsStyle = () => (
  <Box type={({ ...props }) => <MyOtherBox {...props} />} style={style}>
    <Content />
  </Box>
);
