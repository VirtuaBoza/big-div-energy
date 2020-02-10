import * as React from 'react';

interface PaddingConfig {
  small?: number;
  medium?: number;
  large?: number;
}

export interface BigDivEnergyConfig {
  padding?: PaddingConfig;
  breakpoints?: number[];
}

export const defaultConfig: BigDivEnergyConfig = {
  padding: {
    small: 1,
    medium: 2,
    large: 3,
  },
  breakpoints: [640, 768, 1024, 1280],
};

export default React.createContext<BigDivEnergyConfig>(defaultConfig);
