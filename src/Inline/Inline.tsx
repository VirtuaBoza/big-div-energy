import { css, cx } from 'emotion';
import React, { HTMLAttributes } from 'react';
import baselineStyle from '../baseline.scss';
import {
  Alignment,
  alignmentPropType,
  Spacing,
  spacingPropType,
} from '../propTypes';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Inline.scss';

export interface InlineProps extends HTMLAttributes<any> {
  spacing?: Spacing;
  alignment?: Alignment;
}

const Inline = React.forwardRef<HTMLElement, InlineProps>(
  ({ alignment, spacing, className, children, ...rest }, ref) => {
    const { getSteppedSpacingCss, config } = useBigDivEnergy();
    spacing = spacing || config.defaultSpacing;

    const justifyContent =
      alignment === 'center'
        ? 'center'
        : alignment === 'right'
        ? 'flex-end'
        : 'flex-start';

    return (
      <div
        {...rest}
        className={cx(
          baselineStyle.baseline,
          styles.container,
          css`
            ${getSteppedSpacingCss(
              ['margin-left', 'margin-top'],
              spacing,
              undefined,
              input => `calc(0px - ${input})`
            )}
          `,
          css`
            ${getSteppedSpacingCss(
              ['margin-left', 'margin-top'],
              spacing,
              input => `> * {${input}}`
            )}
          `,
          css`
            justify-content: ${justifyContent};
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

Inline.defaultProps = {
  alignment: 'left',
} as InlineProps;

Inline.propTypes = {
  spacing: spacingPropType,
  alignment: alignmentPropType,
};

export default Inline;
