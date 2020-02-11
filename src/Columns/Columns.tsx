import { css, cx } from 'emotion';
import React from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Columns.scss';

export interface ColumnsProps {
  className?: string;
  spacing?: string | string[];
}

const Columns: React.FC<ColumnsProps> = React.forwardRef<
  HTMLDivElement,
  ColumnsProps
>(({ spacing, className, children, ...rest }, ref) => {
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
            'margin-right',
            spacing,
            input => `> *:not(:last-child) {${input}}`,
            input => `calc(${input} / 2)`
          )}
        `,
        css`
          ${getSteppedSpacing(
            'margin-left',
            spacing,
            input => `> *:not(:first-child) {${input}}`,
            input => `calc(${input} / 2)`
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

export default Columns;
