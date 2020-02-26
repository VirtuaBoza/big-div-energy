import { css, cx } from 'emotion';
import PropTypes from 'prop-types';
import React, { HTMLAttributes } from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy, { Spacing } from '../useBigDivEnergy';
import styles from './Stack.scss';

export interface StackProps extends HTMLAttributes<any> {
  type?: PropTypes.ReactComponentLike;
  spacing?: Spacing;
}

const Stack = React.forwardRef<HTMLElement, StackProps>(
  ({ type = 'div', className, spacing, ...rest }, ref) => {
    const { getSteppedSpacingCss, config } = useBigDivEnergy();
    spacing = spacing || config.defaultSpacing;
    return React.createElement(type, {
      ...rest,
      className: cx(
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
      ),
      ref,
    });
  }
);

Stack.defaultProps = {
  type: 'div',
};

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
