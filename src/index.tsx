import * as React from 'react';
import styles from './styles.css';
export {
  default as BigDivEnergyProvider,
  useBigDivEnergy
} from './BigDivEnergyProvider';
export { default as Box } from './Box';
export { default as Columns } from './Columns';
export { default as Inline } from './Inline';
export { default as Stack } from './Stack';

interface ExampleComponentProps {
  text: string;
}

export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};
