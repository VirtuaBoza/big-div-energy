import { css, cx } from 'emotion';
import React, { HTMLAttributes } from 'react';
import baselineStyle from '../baseline.scss';
import {
  AlignItems,
  alignItemsPropType,
  Spacing,
  spacingPropType,
} from '../propTypes';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Columns.scss';

export interface ColumnsProps extends HTMLAttributes<any> {
  spacing?: Spacing;
  alignItems?: AlignItems;
}

const Columns = React.forwardRef<HTMLElement, ColumnsProps>(
  ({ alignItems, spacing, className, children, ...rest }, ref) => {
    const { getSteppedSpacingCss, config } = useBigDivEnergy();
    spacing = spacing || config.defaultSpacing;
    return (
      <div
        {...rest}
        className={cx(
          baselineStyle.baseline,
          styles.container,
          css`
            align-items: ${alignItems};
          `,
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

Columns.defaultProps = {
  alignItems: 'stretch',
} as ColumnsProps;

Columns.propTypes = {
  spacing: spacingPropType,
  alignItems: alignItemsPropType,
};

export default Columns;
