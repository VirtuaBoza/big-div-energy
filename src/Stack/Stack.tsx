import { cx } from 'emotion';
import * as React from 'react';
import baselineStyle from '../baseline.scss';
import styles from './Stack.scss';

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
      className={cx(baselineStyle.baseline, styles.container, className)}
      ref={ref}
    >
      {React.Children.toArray(children).map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
});

export default Stack;
