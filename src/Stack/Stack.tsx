import { css, cx } from 'emotion';
import React from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Stack.scss';

export interface StackProps {
  className?: string;
  spacing?: string | string[];
}

const Stack: React.FC<StackProps> = React.forwardRef<
  HTMLDivElement,
  StackProps
>(({ className, children, spacing, ...rest }, ref) => {
  const { getSteppedSpacing, defaultSpacing } = useBigDivEnergy();
  spacing = spacing || defaultSpacing;
  return (
    <div
      {...rest}
      className={cx(
        baselineStyle.baseline,
        styles.container,
        css`
          ${getSteppedSpacing(
            'margin-top',
            spacing,
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
