import { cx } from 'emotion';
import * as React from 'react';
import baselineStyle from '../baseline.scss';
import styles from './Columns.scss';

export interface ColumnsProps {
  className?: string;
}

const Columns: React.FC<ColumnsProps> = React.forwardRef<
  HTMLDivElement,
  ColumnsProps
>(({ className, children, ...rest }, ref) => {
  return (
    <div
      {...rest}
      className={cx(baselineStyle.baseline, styles.container, className)}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Columns;
