import { Shapeshifter } from 'big-div-energy';
import React from 'react';

export default {
  title: 'Shapeshifter',
  component: Shapeshifter,
};

const Content = () => (
  <React.Fragment>
    <div style={{ backgroundColor: '#F2FF49' }}>These</div>
    <div style={{ backgroundColor: '#FF4242' }}>items</div>
    <div style={{ backgroundColor: '#FB62F6' }}>are</div>
    <div style={{ backgroundColor: '#645DD7' }}>shape-</div>
    <div style={{ backgroundColor: '#B3FFFC' }}>shifting.</div>
  </React.Fragment>
);

export const Default = () => (
  <Shapeshifter components={['Stack', 'Inline']}>
    <Content />
  </Shapeshifter>
);

export const WithOtherProps = () => (
  <Shapeshifter components={['Stack', 'Inline']} spacing={['none', 'medium']}>
    <Content />
  </Shapeshifter>
);
