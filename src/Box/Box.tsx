import classNames from 'classnames';
import * as React from 'react';
import styles from './Box.css';

export interface BoxProps {
  type: string;
  className?: string;
}

const Box: React.FC<BoxProps> = React.forwardRef<HTMLElement, BoxProps>(
  ({ type, className, ...rest }, ref) => {
    return React.createElement(type, {
      ...rest,
      className: classNames(styles.container, className),
      ref
    });
  }
);

Box.defaultProps = {
  type: 'div'
};

export default Box;
