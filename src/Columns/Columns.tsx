import classNames from 'classnames';
import * as React from 'react';
import styles from './Columns.css';

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
      className={classNames(styles.container, className)}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Columns;
