import { Stack } from 'big-div-energy';
import React from 'react';

export default {
  title: 'Stack',
  component: Stack,
};

const Content = () => (
  <React.Fragment>
    <div style={{ backgroundColor: '#F2FF49' }}>These</div>
    <div style={{ backgroundColor: '#FF4242' }}>items</div>
    <div style={{ backgroundColor: '#FB62F6' }}>are</div>
    <div style={{ backgroundColor: '#645DD7' }}>in</div>
    <div style={{ backgroundColor: '#B3FFFC' }}>a stack.</div>
  </React.Fragment>
);

export const Default = () => (
  <Stack>
    <Content />
  </Stack>
);

export const WithPadding = () => (
  <Stack padding="small">
    <Content />
  </Stack>
);
