import { FlexBox } from 'big-div-energy';
import React from 'react';

export default {
  title: 'FlexBox',
  component: FlexBox,
};

const style = { backgroundColor: '#B3FFFC' };

const Content = () => (
  <div>
    This content is in a box. The box has no margin and provides padding on all
    sides.
  </div>
);

export const Default = () => (
  <FlexBox style={style}>
    <Content />
  </FlexBox>
);

export const WithSpacing = () => (
  <FlexBox spacing="large" style={style}>
    <Content />
  </FlexBox>
);

export const WithUnevenSpacing = () => (
  <FlexBox spacing={[['small', 'large']]} style={style}>
    <Content />
  </FlexBox>
);

export const WithSteppedSpacing = () => (
  <FlexBox spacing={['none', 'small', 'large']} style={style}>
    <Content />
  </FlexBox>
);

export const WithSkippedSteppedSpacing = () => (
  <FlexBox spacing={[, 'small', 'large']} style={style}>
    <Content />
  </FlexBox>
);

export const WithFlexSettings = () => (
  <FlexBox style={{ ...style, justifyContent: 'center' }}>
    <Content />
  </FlexBox>
);

const MyOtherFlexBox = ({ children, ...rest }) => (
  <div {...rest}>
    I'm some other FlexBox, and here are my children: {children}
  </div>
);

export const WithCustomType = () => (
  <FlexBox type={MyOtherFlexBox} style={style}>
    <Content />
  </FlexBox>
);

export const WithCustomTypeRenderPropsStyle = () => (
  <FlexBox type={({ ...props }) => <MyOtherFlexBox {...props} />} style={style}>
    <Content />
  </FlexBox>
);
