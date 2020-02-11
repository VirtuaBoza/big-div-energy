import { Columns } from 'big-div-energy';
import React from 'react';

export default {
  title: 'Columns',
  component: Columns,
};

const Content = () =>
  ['#F2FF49', '#FF4242', '#FB62F6', '#645DD7', '#B3FFFC'].map(color => (
    <div key={color} style={{ backgroundColor: color }}>
      These items are in columns.
    </div>
  ));

export const Default = () => (
  <Columns>
    <Content />
  </Columns>
);

export const WithPadding = () => (
  <Columns padding="small">
    <Content />
  </Columns>
);
