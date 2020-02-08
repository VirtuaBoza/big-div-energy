import 'normalize.css';
import * as React from 'react';

const BigDivEnergyContext = React.createContext(null);
export const useBigDivEnergy = () => React.useContext(BigDivEnergyContext);
interface PropTypes {
  children: JSX.Element;
}
export const BigDivEnergyProvider = ({ children }: PropTypes) => {
  return (
    <BigDivEnergyContext.Provider value={null}>
      {children}
    </BigDivEnergyContext.Provider>
  );
};
