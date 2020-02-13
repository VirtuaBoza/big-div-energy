import PropTypes from 'prop-types';
import React from 'react';
import BigDivEnergyContext, {
  BigDivEnergyConfig,
  defaultConfig,
} from '../BigDivEnergyContext';

export interface BigDivEnergyProviderProps {
  config?: BigDivEnergyConfig;
}

/**
 * Use `BigDivEnergyProvider` to provide a config for big-div-energy components.
 *
 * The config and other useful properties and functions can be retrieved with `useBigDivEnergy`.
 *
 */
const BigDivEnergyProvider: React.FC<BigDivEnergyProviderProps> = ({
  config = defaultConfig,
  children,
}) => {
  config = {
    ...defaultConfig,
    ...config,
  };
  return (
    <BigDivEnergyContext.Provider value={config}>
      {children}
    </BigDivEnergyContext.Provider>
  );
};

BigDivEnergyProvider.propTypes = {
  /**
   * An optional config object to customize big-div-energy components and `useBigDivEnergy` outputs.
   */
  config: PropTypes.shape({
    spacing: PropTypes.objectOf(PropTypes.number),
    spacingUnit: PropTypes.string,
    defaultSpacing: PropTypes.string,
    breakpoints: PropTypes.arrayOf(PropTypes.number),
  }),
};

BigDivEnergyProvider.defaultProps = {
  config: defaultConfig,
};

export default BigDivEnergyProvider;
