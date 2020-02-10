import { css, cx } from 'emotion';
import * as React from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Box.scss';

export interface BoxProps {
  type?: string;
  className?: string;
  padding?: string;
}

const Box: React.FC<BoxProps> = React.forwardRef<HTMLElement, BoxProps>(
  ({ type = 'div', className, padding = 'none', ...rest }, ref) => {
    const { getPaddingValue } = useBigDivEnergy();
    const paddingValue = getPaddingValue(padding);
    return React.createElement(type, {
      ...rest,
      className: cx(
        baselineStyle.baseline,
        styles.container,
        css`
          padding: ${paddingValue}rem;
        `,
        className
      ),
      ref,
    });
  }
);

export default Box;
