import { css, cx } from 'emotion';
import React, { HTMLAttributes } from 'react';
import baselineStyle from '../baseline.scss';
import {
  AlignItems,
  alignItemsPropType,
  Component,
  Spacing,
  spacingPropType,
} from '../propTypes';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Stack.scss';

export interface StackProps extends HTMLAttributes<any> {
  type?: Component;
  spacing?: Spacing;
  alignItems?: AlignItems;
}

const Stack = React.forwardRef<HTMLElement, StackProps>(
  ({ type, alignItems, className, spacing, ...rest }, ref) => {
    const { getSteppedSpacingCss, config } = useBigDivEnergy();
    spacing = spacing || config.defaultSpacing;
    return React.createElement(type!, {
      ...rest,
      className: cx(
        baselineStyle.baseline,
        styles.container,
        css`
          align-items: ${alignItems};
        `,
        css`
          ${getSteppedSpacingCss(
            'margin-top',
            spacing,
            input => `> *:not(:first-child) {${input}}`
          )}
        `,
        className
      ),
      ref,
    });
  }
);

Stack.defaultProps = {
  type: 'div',
  alignItems: 'stretch',
} as StackProps;

Stack.propTypes = {
  spacing: spacingPropType,
  alignItems: alignItemsPropType,
};

export default Stack;
