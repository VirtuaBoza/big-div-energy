import { css, cx } from 'emotion';
import React from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Stack.scss';

export interface StackProps {
  className?: string;
  padding?: string | string[];
}

const Stack: React.FC<StackProps> = React.forwardRef<
  HTMLDivElement,
  StackProps
>(({ className, children, padding, ...rest }, ref) => {
  const { getSteppedSpacing, defaultPadding } = useBigDivEnergy();
  padding = padding || defaultPadding;
  return (
    <div
      {...rest}
      className={cx(
        baselineStyle.baseline,
        styles.container,
        css`
          ${getSteppedSpacing(
            'margin-top',
            padding,
            input => `> *:not(:first-child) {${input}}`
          )}
        `,
        className
      )}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Stack;
