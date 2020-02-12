import { css, cx } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Box.scss';

const Box = React.forwardRef<HTMLElement, any>(
  ({ type, className, spacing, ...rest }, ref) => {
    const { getSteppedSpacing, defaultSpacing } = useBigDivEnergy();
    spacing = spacing || defaultSpacing;
    return React.createElement(type!, {
      ...rest,
      className: cx(
        baselineStyle.baseline,
        styles.container,
        css`
          ${getSteppedSpacing('padding', spacing)}
        `,
        className
      ),
      ref,
    });
  }
);

Box.propTypes = {
  type: PropTypes.string.isRequired,
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

Box.defaultProps = {
  type: 'div',
};

export default Box;
