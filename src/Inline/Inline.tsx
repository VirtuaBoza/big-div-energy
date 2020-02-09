import { cx } from 'emotion';
import * as React from 'react';
import baselineStyle from '../baseline.scss';
import styles from './Inline.scss';

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
      className={cx(baselineStyle.baseline, styles.container, className)}
      ref={ref}
    >
      {React.Children.toArray(children).map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
});

export default Inline;
