import { css, cx } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Stack.scss';

const Stack = React.forwardRef<HTMLDivElement, any>(
  ({ className, children, spacing, ...rest }, ref) => {
    const { getSteppedSpacingCss, config } = useBigDivEnergy();
    spacing = spacing || config.defaultSpacing;
    return (
      <div
        {...rest}
        className={cx(
          baselineStyle.baseline,
          styles.container,
          css`
            ${getSteppedSpacingCss(
              'margin-top',
              spacing,
              input => `> *:not(:first-child) {${input}}`
            )}
          `,
          className
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Stack.propTypes = {
  spacing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ])
    ),
  ]),
};

export default Stack;
