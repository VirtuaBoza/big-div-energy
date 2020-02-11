import * as React from 'react';

export interface PaddingConfig {
  [key: string]: number;
}

export interface BigDivEnergyConfig {
  padding?: PaddingConfig;
  paddingUnit?: string;
  defaultPadding?: string;
  breakpoints?: number[];
}

export const defaultConfig: BigDivEnergyConfig = {
  padding: {
    none: 0,
    small: 1,
    medium: 2,
    large: 3,
  },
  paddingUnit: 'rem',
  defaultPadding: 'none',
  breakpoints: [640, 768, 1024, 1280],
};

export default React.createContext<BigDivEnergyConfig>(defaultConfig);
