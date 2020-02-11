import { css, cx } from 'emotion';
import React from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Inline.scss';

export interface InlineProps {
  className?: string;
  padding?: string | string[];
}

const Inline: React.FC<InlineProps> = React.forwardRef<
  HTMLDivElement,
  InlineProps
>(({ className, children, padding, ...rest }, ref) => {
  const { getSteppedSpacing, defaultPadding } = useBigDivEnergy();
  padding = padding || defaultPadding;
  return (
    <div
      {...rest}
      className={cx(
        baselineStyle.baseline,
        styles.container,
        css`
          ${getSteppedSpacing(
            ['margin-left', 'margin-top'],
            padding,
            undefined,
            input => `calc(0px - ${input})`
          )}
        `,
        css`
          ${getSteppedSpacing(
            ['margin-left', 'margin-top'],
            padding,
            input => `> * {${input}}`
          )}
        `,
        className
      )}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Inline;
