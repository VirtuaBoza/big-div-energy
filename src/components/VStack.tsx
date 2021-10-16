import { HorizontalAlignment } from "../types";
import { Property } from "csstype";
import { css } from "@emotion/react";
import { useBigDivEnergy } from "../BigDivEnergyContext";
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
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: ${alignItems};
        overflow: hidden;
        > *:not(:last-child) {
          margin-bottom: ${spacing}${config.lengthUnit};
        }
      `}
      {...rest}
    >
      {children}
    </div>
  );
};
