import { css, cx } from 'emotion';
import * as React from 'react';

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
      className={cx(
        css`
          display: flex;
          > * {
            width: 100%;
          }
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
