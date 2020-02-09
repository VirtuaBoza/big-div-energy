import * as React from 'react';

export interface BigDivEnergyConfig {
  padding?: string;
}

export const defaultConfig = {};

export default React.createContext<BigDivEnergyConfig>(defaultConfig);
