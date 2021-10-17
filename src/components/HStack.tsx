import { Property } from "csstype";
import { SpacerContext } from "../SpacerContext";
import { VerticalAlignment } from "../types";
import { css } from "@emotion/react";
import { useBigDivEnergy } from "../BigDivEnergyContext";
import { useSpacerContainer } from "../SpacerContainerContext";
import React from "react";

export interface HStackProps {
  alignment?: VerticalAlignment;
  spacing?: number;
}

export const HStack: React.FC<HStackProps> = ({
  alignment,
  children,
  spacing = 8,
  ...rest
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
      <div
        css={[
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
            `,
        ]}
        {...rest}
      >
        {children}
      </div>
    </SpacerContext.Provider>
  );
};
