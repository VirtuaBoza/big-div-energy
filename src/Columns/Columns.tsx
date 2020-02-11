import { css, cx } from 'emotion';
import React from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Columns.scss';

export interface ColumnsProps {
  className?: string;
  padding?: string | string[];
}

const Columns: React.FC<ColumnsProps> = React.forwardRef<
  HTMLDivElement,
  ColumnsProps
>(({ padding, className, children, ...rest }, ref) => {
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
            'margin-right',
            padding,
            input => `> *:not(:last-child) {${input}}`,
            input => `calc(${input} / 2)`
          )}
        `,
        css`
          ${getSteppedSpacing(
            'margin-left',
            padding,
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
