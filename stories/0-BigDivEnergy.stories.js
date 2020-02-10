import { BigDivEnergyProvider } from 'big-div-energy';
import React from 'react';

export default {
  title: 'BigDivEnergy',
  component: BigDivEnergyProvider,
};

export const Default = () => (
  <BigDivEnergyProvider>
    Use <code>BigDivEnergyProvider</code> to provide options.
  </BigDivEnergyProvider>
);
