import classNames from 'classnames';
import * as React from 'react';
import styles from './Stack.css';

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
      className={classNames(styles.container, className)}
      ref={ref}
    >
      {React.Children.toArray(children).map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
});

export default Stack;
