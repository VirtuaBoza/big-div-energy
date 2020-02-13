import { css, cx } from 'emotion';
import PropTypes from 'prop-types';
import React, { HTMLAttributes } from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy, { Spacing } from '../useBigDivEnergy';
import styles from './Columns.scss';

export interface ColumnsProps extends HTMLAttributes<any> {
  spacing?: Spacing;
}

const Columns = React.forwardRef<HTMLElement, ColumnsProps>(
  ({ spacing, className, children, ...rest }, ref) => {
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
              'margin-right',
              spacing,
              input => `> *:not(:last-child) {${input}}`,
              input => `calc(${input} / 2)`
            )}
          `,
          css`
            ${getSteppedSpacingCss(
              'margin-left',
              spacing,
              input => `> *:not(:first-child) {${input}}`,
              input => `calc(${input} / 2)`
            )}
          `,
          className
        )}
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        {children}
      </div>
    );
  }
);

Columns.propTypes = {
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
