import { cx } from 'emotion';
import * as React from 'react';
import baselineStyle from '../baseline.scss';
import styles from './Box.scss';

export interface BoxProps {
  type: string;
  className?: string;
}

const Box: React.FC<BoxProps> = React.forwardRef<HTMLElement, BoxProps>(
  ({ type, className, ...rest }, ref) => {
    return React.createElement(type, {
      ...rest,
      className: cx(baselineStyle.baseline, styles.container, className),
      ref,
    });
  }
);

Box.defaultProps = {
  type: 'div',
};

export default Box;
