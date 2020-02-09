import * as React from 'react';
import styles from './BigDivEnergyProvider.scss';

const BigDivEnergyContext = React.createContext(null);
export const useBigDivEnergy = () => React.useContext(BigDivEnergyContext);
interface BigDivEnergyProviderProps {}
const BigDivEnergyProvider: React.FC<BigDivEnergyProviderProps> = ({
  children,
}) => {
  return (
    <BigDivEnergyContext.Provider value={null}>
      <div className={styles.container}>{children}</div>
    </BigDivEnergyContext.Provider>
  );
};

export default BigDivEnergyProvider;
