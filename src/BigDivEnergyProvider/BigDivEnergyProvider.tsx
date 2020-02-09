import * as React from 'react';
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

export default BigDivEnergyProvider;
