import { ISpacerContext, SpacerContext } from "../SpacerContext";
import { Property } from "csstype";
import { VerticalAlignment } from "../types";
import { css } from "@emotion/react";
import { useBigDivEnergy } from "../BigDivEnergyContext";
import React, { useMemo, useState } from "react";

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
  const [containsSpacer, setContainsSpacer] = useState(false);
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

  const spacerContextValue = useMemo<ISpacerContext>(
    () => ({
      container: "HStack",
      setHasSpacer: setContainsSpacer,
    }),
    []
  );
  return (
    <SpacerContext.Provider value={spacerContextValue}>
      <div
        css={[
          css`
            display: flex;
            align-items: ${alignItems};
            > *:not(:last-child) {
              margin-right: ${spacing}${config.lengthUnit};
            }
          `,
          containsSpacer &&
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
