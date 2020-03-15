import React from 'react';
import BigDivEnergyContext, {
  BigDivEnergyConfig,
  SpacingConfig,
} from '../BigDivEnergyContext';
import { Spacing } from '../propTypes';

export interface BigDivEnergy {
  config: BigDivEnergyConfig;
  getSteppedSpacingCss: (
    properties: string | string[],
    spacing: Spacing,
    ruleWrapper?: (input: string) => string,
    valueWrapper?: (input: string) => string
  ) => string;
  stepIndex: number;
}

const useBigDivEnergy = (): BigDivEnergy => {
  const config = React.useContext(BigDivEnergyContext);
  const { spacing: spacingConfig, breakpoints, defaultSpacing } = config;

  const { width } = useWindowSize();
  let stepIndex = 0;
  for (let i = 0; i <= breakpoints!.length; i++) {
    stepIndex = i;
    if (width < breakpoints![i]) {
      break;
    }
  }

  return {
    config,
    stepIndex,
    getSteppedSpacingCss: (properties, spacing, ruleWrapper, valueWrapper) => {
      properties = Array.isArray(properties) ? properties : [properties];
      spacing = Array.isArray(spacing)
        ? spacing.map(s => (Array.isArray(s) ? s : [s]))
        : [[spacing]];
      ruleWrapper = ruleWrapper || (input => input);
      valueWrapper = valueWrapper || (input => input);

      return memoizedGetSteppedSpacing(
        spacingConfig,
        breakpoints,
        properties,
        spacing,
        ruleWrapper,
        valueWrapper,
        defaultSpacing
      );
    },
  };
};

export default useBigDivEnergy;

const memoizedGetSteppedSpacing = memoize<string>(internalGetSteppedSpacing);

function internalGetSteppedSpacing(
  spacingConfig: SpacingConfig,
  breakpoints: number[],
  properties: string[],
  spacing: (string | null | undefined | (string | null | undefined)[])[],
  ruleWrapper: (input: string) => string,
  valueWrapper: (input: string) => string,
  // TODO: expect an array here so there can be defaults for each step.
  defaultSpacing: string
): string {
  let css = '';

  function getRules(stepIndex: number): string {
    return properties.reduce((accProp, curProp) => {
      let value = '';
      for (let i = 0; i < spacing[stepIndex]!.length; i++) {
        if (spacing[stepIndex]![i]) {
          value += ` ${spacingConfig[spacing[stepIndex]![i]!] ||
            spacing[stepIndex]![i]}`;
        } else {
          value += ` ${spacingConfig[defaultSpacing]}`;
        }
      }
      return accProp + ruleWrapper!(`${curProp}: ${valueWrapper!(value)};`);
    }, '');
  }

  if (spacing[0]) {
    css = getRules(0);
  }

  for (let i = 0; i + 1 < spacing.length && i < breakpoints.length; i++) {
    if (spacing[i + 1]) {
      const filler = getRules(i + 1);
      css += `
          @media (min-width: ${breakpoints[i]}px) {
            ${filler}
          }
          `;
    }
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
