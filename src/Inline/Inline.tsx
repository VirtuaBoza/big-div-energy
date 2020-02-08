import { css, cx } from 'emotion';
import * as React from 'react';

export interface InlineProps {
  className?: string;
}

const Inline: React.FC<InlineProps> = React.forwardRef<
  HTMLDivElement,
  InlineProps
>(({ className, children, ...rest }, ref) => {
  return (
    <div
      {...rest}
      className={cx(
        css`
          display: flex;
          flex-wrap: wrap;
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

export default Inline;
