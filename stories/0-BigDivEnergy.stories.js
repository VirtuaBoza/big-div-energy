import { BigDivEnergyProvider, useBigDivEnergy } from 'big-div-energy';
import React from 'react';

export default {
  title: 'BigDivEnergy',
  component: BigDivEnergyProvider,
};

export const Default = () => (
  <BigDivEnergyProvider>
    See <a href="/?path=/docs/bigdivenergy--default">Docs</a> for usage.
  </BigDivEnergyProvider>
);

export const WithConfig = () => (
  <BigDivEnergyProvider
    config={{
      spacing: { nada: 0, short: 8, tall: 12, grande: 16, venti: 20 },
      defaultSpacing: 'nada',
      spacingUnit: 'px',
      breakpoints: [768],
    }}
  >
    See <a href="/?path=/docs/bigdivenergy--with-config">Docs</a> for code
    example.
  </BigDivEnergyProvider>
);

export const UseBigDivEnergy = () => {
  const { config, stepIndex, getSteppedSpacingCss } = useBigDivEnergy();
  return (
    <BigDivEnergyProvider>
      See <a href="/?path=/docs/bigdivenergy--use-big-div-energy">Docs</a> for
      code example.
      <dl>
        <dt>config</dt>
        <dd>
          <pre>{JSON.stringify(config, null, 2)}</pre>
        </dd>
        <dt>stepIndex</dt>
        <dd>
          Given a 'spacing' array, this would be the index of the active
          element.
        </dd>
        <dd>{stepIndex}</dd>
        <dt>getSteppedSpacingCss</dt>
        <dd>For use with CSS-in-JS libraries such as emotion.</dd>
        <dd>{getSteppedSpacingCss('padding', ['none', 'small'])}</dd>
      </dl>
    </BigDivEnergyProvider>
  );
};

UseBigDivEnergy.story = {
  name: 'useBigDivEnergy',
};
