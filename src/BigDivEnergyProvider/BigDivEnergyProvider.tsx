import PropTypes from 'prop-types';
import React from 'react';
import BigDivEnergyContext, {
  BigDivEnergyConfig,
  defaultConfig,
} from '../BigDivEnergyContext';

interface BigDivEnergyProviderProps {
  config?: BigDivEnergyConfig;
}
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
  /** An optional config object to customize BigDivEnergy. */
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
