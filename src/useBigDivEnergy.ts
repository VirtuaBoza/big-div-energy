// import * as facepaint from 'facepaint';
import * as React from 'react';
import BigDivEnergyContext from './BigDivEnergyContext';

const useBigDivEnergy = () => {
  const config = React.useContext(BigDivEnergyContext);

  // const mq = facepaint(
  //   config.breakpoints!.map(bp => `@media (min-width: ${bp}px)`)
  // );
  // console.log(
  //   mq({
  //     color: ['green', 'gray', 'hotpink'],
  //   })
  // );

  return {
    getPaddingValue: (padding: string | string[]): number => {
      if (Array.isArray(padding)) {
        return 0;
      }
      return (config.padding && config.padding[padding]) || 0;
    },
  };
};

export default useBigDivEnergy;
