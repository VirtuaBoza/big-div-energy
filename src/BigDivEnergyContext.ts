import * as React from 'react';

export interface SpacingConfig {
  [key: string]: number;
}

export interface BigDivEnergyConfig {
  spacing?: SpacingConfig;
  spacingUnit?: string;
  defaultSpacing?: string | string[];
  breakpoints?: number[];
}

export const defaultConfig: BigDivEnergyConfig = {
  spacing: {
    none: 0,
    small: 1,
    medium: 2,
    large: 3,
  },
  spacingUnit: 'rem',
  defaultSpacing: 'none',
  breakpoints: [640, 768, 1024, 1280],
};

export default React.createContext<BigDivEnergyConfig>(defaultConfig);
