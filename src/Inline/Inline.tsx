import classNames from 'classnames';
import * as React from 'react';
import styles from './Inline.css';

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
      className={classNames(styles.container, className)}
      ref={ref}
    >
      {React.Children.toArray(children).map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
});

export default Inline;
