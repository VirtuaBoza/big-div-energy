import PropTypes from 'prop-types';
import React, { HTMLAttributes } from 'react';
import { Component, typePropType } from '../propTypes';
import useBigDivEnergy from '../useBigDivEnergy';

export interface ShapeshifterProps extends HTMLAttributes<any> {
  components: (Component | null | undefined)[];
}

const Shapeshifter = React.forwardRef<HTMLElement, ShapeshifterProps>(
  ({ components, ...rest }, ref) => {
    const { stepIndex } = useBigDivEnergy();

    let component;

    for (let i = 0; i <= stepIndex; i++) {
      component = components[i] || component;
    }

    if (!component) {
      return null;
    }

    return React.createElement(component, {
      ...rest,
      ref,
    });
  }
);

Shapeshifter.propTypes = {
  components: PropTypes.arrayOf(typePropType).isRequired,
};

export default Shapeshifter;
