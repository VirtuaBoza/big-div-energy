import React from 'react';

export interface SpacingConfig {
  [key: string]: string;
}

export interface BigDivEnergyConfig {
  spacing?: SpacingConfig;
  defaultSpacing?: string | string[];
  breakpoints?: number[];
}

export const defaultConfig: BigDivEnergyConfig = {
  spacing: {
    none: '0rem',
    small: '1rem',
    medium: '2rem',
    large: '3rem',
  },
  defaultSpacing: 'none',
  breakpoints: [640, 768, 1024, 1280],
};

export default React.createContext<BigDivEnergyConfig>(defaultConfig);
