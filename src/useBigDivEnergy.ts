import React from 'react';
import BigDivEnergyContext, { SpacingConfig } from './BigDivEnergyContext';

export interface BigDivEnergy {
  defaultSpacing: string | string[];
  getSteppedSpacing: (
    properties: string | string[],
    spacing: string | (string | string[])[],
    ruleWrapper?: (input: string) => string,
    valueWrapper?: (input: string) => string
  ) => string;
  breakpointIndex: number;
}

const useBigDivEnergy = (): BigDivEnergy => {
  const {
    defaultSpacing,
    spacing: spacingConfig,
    spacingUnit,
    breakpoints,
  } = React.useContext(BigDivEnergyContext);

  const { width } = useWindowSize();
  let breakpointIndex = 0;
  for (let i = 0; i < breakpoints!.length; i++) {
    if (width < breakpoints![i]) {
      break;
    } else {
      breakpointIndex = i;
    }
  }

  return {
    breakpointIndex,
    defaultSpacing: defaultSpacing!,
    getSteppedSpacing: (properties, spacing, ruleWrapper, valueWrapper) => {
      properties = Array.isArray(properties) ? properties : [properties];
      spacing = Array.isArray(spacing)
        ? spacing.map(s => (Array.isArray(s) ? s : [s]))
        : [[spacing]];
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
  spacing: string[][],
  ruleWrapper: (input: string) => string,
  valueWrapper: (input: string) => string
): string {
  let css = properties.reduce((acc, cur) => {
    return (
      acc +
      ruleWrapper!(
        `${cur}: ${valueWrapper!(
          spacing[0].reduce(
            (acc, cur) => `${acc} ${spacingConfig[cur]}${spacingUnit}`,
            ''
          )
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
            spacing[i + 1].reduce(
              (acc, cur) => `${acc} ${spacingConfig[cur]}${spacingUnit}`,
              ''
            )
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

function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = React.useState(getSize);

  React.useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
