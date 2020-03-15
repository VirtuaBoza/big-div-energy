import { css, cx } from 'emotion';
import React, { HTMLAttributes } from 'react';
import baselineStyle from '../baseline.scss';
import {
  AlignContent,
  AlignItems,
  alignItemsPropType,
  Component,
  FlexDirection,
  flexDirectionPropType,
  JustifyContent,
  justifyContentPropType,
  Spacing,
  spacingPropType,
  typePropType,
} from '../propTypes';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './FlexBox.scss';

export interface FlexBoxProps extends HTMLAttributes<any> {
  type?: Component;
  spacing?: Spacing;
  flexDirection?: FlexDirection;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
}

/**
 * A box is a flex container which can provide padding on all sides via the spacing prop.
 */
const FlexBox = React.forwardRef<HTMLElement, FlexBoxProps>(
  (
    {
      type,
      flexDirection,
      alignItems,
      justifyContent,
      alignContent,
      className,
      spacing,
      ...rest
    },
    ref
  ) => {
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
          flex-direction: ${flexDirection};
          align-items: ${alignItems};
          justify-content: ${justifyContent};
          align-content: ${alignContent};
        `,
        className
      ),
      ref,
    });
  }
);

FlexBox.defaultProps = {
  type: 'div',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  alignContent: 'stretch',
} as FlexBoxProps;

FlexBox.propTypes = {
  /** The element type you want to use. */
  type: typePropType,
  spacing: spacingPropType,
  flexDirection: flexDirectionPropType,
  alignItems: alignItemsPropType,
  justifyContent: justifyContentPropType,
};

export default FlexBox;
