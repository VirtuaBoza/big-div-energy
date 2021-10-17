import { HorizontalAlignment } from "../types";
import { Property } from "csstype";
import { SpacerContext } from "../SpacerContext";
import { css } from "@emotion/react";
import { useBigDivEnergy } from "../BigDivEnergyContext";
import { useSpacerContainer } from "../SpacerContainerContext";
import React from "react";

export interface VStackProps {
  alignment?: HorizontalAlignment;
  spacing?: number;
}

export const VStack: React.FC<VStackProps> = ({
  alignment,
  children,
  spacing = 0,
  ...rest
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
      <div
        css={[
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
            `,
        ]}
        {...rest}
      >
        {children}
      </div>
    </SpacerContext.Provider>
  );
};
