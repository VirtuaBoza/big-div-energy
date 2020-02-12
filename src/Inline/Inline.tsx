import { css, cx } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import baselineStyle from '../baseline.scss';
import useBigDivEnergy from '../useBigDivEnergy';
import styles from './Inline.scss';

const Inline = React.forwardRef<HTMLDivElement, any>(
  ({ className, children, spacing, alignment, ...rest }, ref) => {
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
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Inline.propTypes = {
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

Inline.defaultProps = {
  alignment: 'left',
};

export default Inline;
