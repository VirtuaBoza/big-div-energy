import { ClassNames } from "@emotion/react";
import { Modifier } from "../types";
import { Property } from "csstype";
import { SpacerContext } from "../SpacerContext";
import { VerticalAlignment } from "../types";
import { ViewModifier } from "./ViewModifier";
import { useBigDivEnergy } from "../BigDivEnergyContext";
import { useSpacerContainer } from "../SpacerContainerContext";
import React from "react";

export type HStackProps = {
  alignment?: VerticalAlignment;
  modifiers?: Modifier[];
  spacing?: number;
};

export const HStack: React.FC<HStackProps> = ({
  alignment,
  children,
  modifiers,
  spacing = 8,
}) => {
  const { config } = useBigDivEnergy();
  const { spacerContainers, spacerContext } = useSpacerContainer("HStack");

  const alignItems = ((): Property.AlignContent => {
    switch (alignment) {
      case "bottom":
        return "flex-end";
      case "top":
        return "flex-start";
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
                align-items: ${alignItems};
                overflow: hidden;
                > *:not(:last-child) {
                  margin-right: ${spacing}${config.lengthUnit};
                }
              `,
              spacerContainers.includes("HStack") &&
                css`
                  width: 100%;
                `,
              spacerContainers.includes("VStack") &&
                css`
                  height: 100%;
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
