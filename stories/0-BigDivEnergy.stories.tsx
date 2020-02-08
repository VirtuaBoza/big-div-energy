import * as React from 'react';
import BigDivEnergyProvider from '../src/BigDivEnergyProvider';

export default {
  title: 'BigDivEnergy',
  component: BigDivEnergyProvider,
};

export const Default = () => (
  <BigDivEnergyProvider>
    <h1>Provide me</h1>
  </BigDivEnergyProvider>
);
