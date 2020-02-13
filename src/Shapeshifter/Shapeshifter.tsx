import PropTypes from 'prop-types';
import React from 'react';
import Box from '../Box';
import Columns from '../Columns';
import Inline from '../Inline';
import Stack from '../Stack';
import useBigDivEnergy from '../useBigDivEnergy';

const Shapeshifter = React.forwardRef<HTMLElement, any>(
  ({ components, ...rest }, ref) => {
    const { stepIndex } = useBigDivEnergy();

    let component;

    for (let i = stepIndex; i >= 0; i--) {
      if (components[i]) {
        component = components[i];
        break;
      }
    }

    if (!component) {
      return null;
    }

    switch (component) {
      case 'Box':
        return <Box {...rest} ref={ref} />;
      case 'Columns':
        return <Columns {...rest} ref={ref} />;
      case 'Inline':
        return <Inline {...rest} ref={ref} />;
      case 'Stack':
        return <Stack {...rest} ref={ref} />;
      default:
        return React.createElement(component, {
          ...rest,
          ref,
        });
    }
  }
);

Shapeshifter.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.elementType,
      PropTypes.oneOf(['Box', 'Columns', 'Inline', 'Stack']),
    ])
  ).isRequired,
};

export default Shapeshifter;
