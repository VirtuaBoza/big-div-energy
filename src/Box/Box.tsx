import { css, cx } from 'emotion';
import React from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Box.scss';

export interface BoxProps {
  type?: string;
  className?: string;
  padding?: string | string[];
}

const Box: React.FC<BoxProps> = React.forwardRef<HTMLElement, BoxProps>(
  ({ type = 'div', className, padding, ...rest }, ref) => {
    const { getSteppedSpacing, defaultPadding } = useBigDivEnergy();
    padding = padding || defaultPadding;
    return React.createElement(type, {
      ...rest,
      className: cx(
        baselineStyle.baseline,
        styles.container,
        css`
          ${getSteppedSpacing('padding', padding)}
        `,
        className
      ),
      ref,
    });
  }
);

export default Box;
