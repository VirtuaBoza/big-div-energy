import { css, cx } from 'emotion';
import * as React from 'react';

export interface BoxProps {
  type: string;
  className?: string;
}

const Box: React.FC<BoxProps> = React.forwardRef<HTMLElement, BoxProps>(
  ({ type, className, ...rest }, ref) => {
    return React.createElement(type, {
      ...rest,
      className: cx(
        css`
          box-sizing: border-box;
          margin: 0px;
          word-break: break-word;
        `,
        className
      ),
      ref,
    });
  }
);

Box.defaultProps = {
  type: 'div',
};

export default Box;
