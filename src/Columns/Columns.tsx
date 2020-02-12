import { css, cx } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Columns.scss';

const Columns = React.forwardRef<HTMLDivElement, any>(
  ({ spacing, className, children, ...rest }, ref) => {
    const { getSteppedSpacing, defaultSpacing } = useBigDivEnergy();
    spacing = spacing || defaultSpacing;
    return (
      <div
        {...rest}
        className={cx(
          baselineStyle.baseline,
          styles.container,
          css`
            ${getSteppedSpacing(
              'margin-right',
              spacing,
              input => `> *:not(:last-child) {${input}}`,
              input => `calc(${input} / 2)`
            )}
          `,
          css`
            ${getSteppedSpacing(
              'margin-left',
              spacing,
              input => `> *:not(:first-child) {${input}}`,
              input => `calc(${input} / 2)`
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

Columns.propTypes = {
  className: PropTypes.string,
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

export default Columns;
