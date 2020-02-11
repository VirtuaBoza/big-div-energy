import React from 'react';
import BigDivEnergyContext, { SpacingConfig } from './BigDivEnergyContext';

export interface BigDivEnergy {
  defaultSpacing: string | string[];
  getSteppedSpacing: (
    properties: string | string[],
    spacing: string | string[],
    ruleWrapper?: (input: string) => string,
    valueWrapper?: (input: string) => string
  ) => string;
}

const useBigDivEnergy = (): BigDivEnergy => {
  const {
    defaultSpacing,
    spacing: spacingConfig,
    spacingUnit,
    breakpoints,
  } = React.useContext(BigDivEnergyContext);

  return {
    defaultSpacing: defaultSpacing!,
    getSteppedSpacing: (properties, spacing, ruleWrapper, valueWrapper) => {
      properties = Array.isArray(properties) ? properties : [properties];
      spacing = Array.isArray(spacing) ? spacing : [spacing];
      ruleWrapper = ruleWrapper || (input => input);
      valueWrapper = valueWrapper || (input => input);

      return memoizedGetSteppedSpacing(
        spacingConfig,
        spacingUnit,
        breakpoints,
        properties,
        spacing,
        ruleWrapper,
        valueWrapper
      );
    },
  };
};

export default useBigDivEnergy;

const memoizedGetSteppedSpacing = memoize<string>(internalGetSteppedSpacing);

function internalGetSteppedSpacing(
  spacingConfig: SpacingConfig,
  spacingUnit: string,
  breakpoints: number[],
  properties: string[],
  spacing: string[],
  ruleWrapper: (input: string) => string,
  valueWrapper: (input: string) => string
): string {
  let css = properties.reduce((acc, cur) => {
    return (
      acc +
      ruleWrapper!(
        `${cur}: ${valueWrapper!(
          `${spacingConfig[spacing[0]]}${spacingUnit}`
        )};`
      )
    );
  }, '');
  for (let i = 0; i + 1 < spacing.length && i < breakpoints.length; i++) {
    const filler = properties.reduce((acc, cur) => {
      return (
        acc +
        ruleWrapper!(
          `${cur}: ${valueWrapper!(
            `${spacingConfig[spacing[i + 1]]}${spacingUnit}`
          )};`
        )
      );
    }, '');
    css += `
        @media (min-width: ${breakpoints[i]}px) {
          ${filler}
        }
        `;
  }
  return css;
}

function memoize<T>(func: (...rest: any[]) => T): (...rest: any[]) => T {
  const memoized = function(...args: any[]) {
    const key = JSON.stringify(args.map(arg => arg && arg.toString()));
    const cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new Map();
  return memoized;
}
