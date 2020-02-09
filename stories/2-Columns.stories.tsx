import * as React from 'react';
import Columns from '../src/Columns';

export default {
  title: 'Columns',
  component: Columns,
};

const Content = () => (
  <React.Fragment>
    <div style={{ backgroundColor: '#F2FF49' }}>These</div>
    <div style={{ backgroundColor: '#FF4242' }}>items</div>
    <div style={{ backgroundColor: '#FB62F6' }}>are</div>
    <div style={{ backgroundColor: '#645DD7' }}>in</div>
    <div style={{ backgroundColor: '#B3FFFC' }}>columns.</div>
  </React.Fragment>
);

export const Default = () => (
  <Columns>
    <Content />
  </Columns>
);
