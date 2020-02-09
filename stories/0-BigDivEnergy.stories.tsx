import * as React from 'react';
import BigDivEnergyProvider from '../src/BigDivEnergyProvider';

export default {
  title: 'BigDivEnergy',
  component: BigDivEnergyProvider,
};

export const Default = () => (
  <BigDivEnergyProvider>
    Use <code>BigDivEnergyProvider</code> to provide options.
  </BigDivEnergyProvider>
);
