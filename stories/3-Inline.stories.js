import { Inline } from 'big-div-energy';
import React from 'react';

export default {
  title: 'Inline',
  component: Inline,
};

const Content = () => (
  <React.Fragment>
    <div style={{ backgroundColor: '#F2FF49' }}>These</div>
    <div style={{ backgroundColor: '#FF4242' }}>items</div>
    <div style={{ backgroundColor: '#FB62F6' }}>are</div>
    <div style={{ backgroundColor: '#645DD7' }}>in</div>
    <div style={{ backgroundColor: '#B3FFFC' }}>line.</div>
  </React.Fragment>
);

export const Default = () => (
  <Inline>
    <Content />
  </Inline>
);

export const WithPadding = () => (
  <Inline padding="small">
    <Content />
  </Inline>
);
