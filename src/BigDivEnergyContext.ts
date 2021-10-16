import { LengthUnit } from "./types";
import React, { useContext } from "react";

export interface IBigDivEnergyContext {
  config: BigDivEnergyConfig;
}

export interface BigDivEnergyConfig {
  lengthUnit: LengthUnit;
  // padding: {
  //   defaultValue: number;
  //   unit: LengthUnit;
  // };
  // spacing: {
  //   defaultValue: number;
  //   unit: LengthUnit;
  // };
}

export const defaultConfig: BigDivEnergyConfig = {
  lengthUnit: "pt",
  // padding: {
  //   defaultValue: 16,
  // },
  // spacing: {
  //   defaultValue: 8,
  //   unit: "pt",
  // },
};

export const BigDivEnergyContext = React.createContext<IBigDivEnergyContext>({
  config: defaultConfig,
});

export function useBigDivEnergy(): IBigDivEnergyContext {
  return useContext(BigDivEnergyContext);
}
