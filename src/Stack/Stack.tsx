import { css, cx } from 'emotion';
import * as React from 'react';

export interface StackProps {
  className?: string;
}

const Stack: React.FC<StackProps> = React.forwardRef<
  HTMLDivElement,
  StackProps
>(({ className, children, ...rest }, ref) => {
  return (
    <div
      {...rest}
      className={cx(
        css`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        `,
        className
      )}
      ref={ref}
    >
      {React.Children.toArray(children).map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
});

export default Stack;
