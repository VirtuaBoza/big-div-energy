import { BigDivEnergyProvider, useBigDivEnergy } from 'big-div-energy';
import React from 'react';

export default {
  title: 'BigDivEnergy',
  component: BigDivEnergyProvider,
};

export const Default = () => <BigDivEnergyProvider></BigDivEnergyProvider>;

export const WithConfig = () => (
  <BigDivEnergyProvider
    config={{
      spacing: { nada: 0, short: 8, tall: 12, grande: 16, venti: 20 },
      defaultSpacing: 'nada',
      spacingUnit: 'px',
      breakpoints: [768],
    }}
  ></BigDivEnergyProvider>
);

export const UseBigDivEnergy = () => {
  const { config, breakpointIndex, getSteppedSpacingCss } = useBigDivEnergy();
  return (
    <BigDivEnergyProvider>
      <dl>
        <dt>config</dt>
        <dd>
          <pre>{JSON.stringify(config, null, 2)}</pre>
        </dd>
        <dt>breakpointIndex</dt>
        <dd>{breakpointIndex}</dd>
        <dt>
          getSteppedSpacingCss (for use with CSS-in-JS libraries such as
          emotion)
        </dt>
        <dd>{getSteppedSpacingCss('padding', ['none', 'small'])}</dd>
      </dl>
    </BigDivEnergyProvider>
  );
};

UseBigDivEnergy.story = {
  name: 'useBigDivEnergy',
};
