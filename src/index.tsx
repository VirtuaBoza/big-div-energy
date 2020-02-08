/**
 * @class ExampleComponent
 */

import * as React from 'react';
import styles from './styles.css';
export {
  BigDivEnergyProvider,
  useBigDivEnergy
} from './BigDivEnergyProvider/BigDivEnergyProvider';

interface ExampleComponentProps {
  text: string;
}

export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};
