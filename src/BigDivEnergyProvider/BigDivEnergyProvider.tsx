import * as React from 'react';

const BigDivEnergyContext = React.createContext(null);
export const useBigDivEnergy = () => React.useContext(BigDivEnergyContext);
interface BigDivEnergyProviderProps {}
const BigDivEnergyProvider: React.FC<BigDivEnergyProviderProps> = ({
  children,
}) => {
  return (
    <BigDivEnergyContext.Provider value={null}>
      {children}
    </BigDivEnergyContext.Provider>
  );
};

export default BigDivEnergyProvider;
