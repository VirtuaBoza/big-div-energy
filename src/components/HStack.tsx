import { Property } from "csstype";
import { VerticalAlignment } from "../types";
import { css } from "@emotion/react";
import { useBigDivEnergy } from "../BigDivEnergyContext";
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
    <div
      css={css`
        display: flex;
        align-items: ${alignItems};
        > *:not(:last-child) {
          margin-right: ${spacing}${config.lengthUnit};
        }
      `}
      {...rest}
    >
      {children}
    </div>
  );
};
