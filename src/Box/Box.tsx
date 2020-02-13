import { css, cx } from 'emotion';
import PropTypes from 'prop-types';
import React, { HTMLAttributes } from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Box.scss';

export interface BoxProps extends HTMLAttributes<any> {
  type?: PropTypes.ReactComponentLike;
  spacing?:
    | string
    | null
    | undefined
    | (string | null | undefined | (string | null | undefined)[])[];
  alignment?: string;
}

const Box: React.FC<BoxProps> = React.forwardRef<HTMLElement, BoxProps>(
  ({ type = 'div', className, spacing, alignment, ...rest }, ref) => {
    const { getSteppedSpacingCss, config } = useBigDivEnergy();
    spacing = spacing || config.defaultSpacing;
    return React.createElement(type, {
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
};

Box.propTypes = {
  /** The element type you want to use. */
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  spacing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ])
    ),
  ]),
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Box;
