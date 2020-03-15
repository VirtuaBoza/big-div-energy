import { css, cx } from 'emotion';
import React, { HTMLAttributes } from 'react';
import baselineStyle from '../baseline.scss';
import {
  Alignment,
  alignmentPropType,
  Component,
  Spacing,
  spacingPropType,
  typePropType,
} from '../propTypes';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Box.scss';

export interface BoxProps extends HTMLAttributes<any> {
  type?: Component;
  spacing?: Spacing;
  alignment?: Alignment;
}

const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ type, alignment, spacing, className, ...rest }, ref) => {
    const { getSteppedSpacingCss, config } = useBigDivEnergy();
    spacing = spacing || config.defaultSpacing;
    return React.createElement(type!, {
      ...rest,
      className: cx(
        baselineStyle.baseline,
        styles.container,
        css`
          ${getSteppedSpacingCss('padding', spacing!)}
        `,
        css`
          text-align: ${alignment};
        `,
        className
      ),
      ref,
    });
  }
);

Box.defaultProps = {
  type: 'div',
  alignment: 'left',
} as BoxProps;

Box.propTypes = {
  /** The element type you want to use. */
  type: typePropType,
  spacing: spacingPropType,
  alignment: alignmentPropType,
};

export default Box;
