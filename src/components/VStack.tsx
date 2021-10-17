import { ClassNames } from "@emotion/react";
import { HorizontalAlignment } from "../types";
import { Modifier } from "../types";
import { Property } from "csstype";
import { SpacerContext } from "../SpacerContext";
import { ViewModifier } from "./ViewModifier";
import { useBigDivEnergy } from "../BigDivEnergyContext";
import { useSpacerContainer } from "../SpacerContainerContext";
import React from "react";

export type VStackProps = {
  alignment?: HorizontalAlignment;
  modifiers?: Modifier[];
  spacing?: number;
};

export const VStack: React.FC<VStackProps> = ({
  alignment,
  children,
  modifiers,
  spacing = 0,
}) => {
  const { config } = useBigDivEnergy();
  const { spacerContainers, spacerContext } = useSpacerContainer("VStack");

  const alignItems: Property.AlignContent = (() => {
    switch (alignment) {
      case "leading":
        return "flex-start";
      case "trailing":
        return "flex-end";
      default:
        return "center";
    }
  })();

  return (
    <SpacerContext.Provider value={spacerContext}>
      <ClassNames>
        {({ css, cx }) => (
          <ViewModifier
            className={cx(
              css`
                display: flex;
                flex-direction: column;
                align-items: ${alignItems};
                overflow: hidden;
                > *:not(:last-child) {
                  margin-bottom: ${spacing}${config.lengthUnit};
                }
              `,
              spacerContainers.includes("VStack") &&
                css`
                  height: 100%;
                `,
              spacerContainers.includes("HStack") &&
                css`
                  width: 100%;
                `
            )}
            modifiers={modifiers}
          >
            {children}
          </ViewModifier>
        )}
      </ClassNames>
    </SpacerContext.Provider>
  );
};
