import { HorizontalAlignment } from "../types";
import { ISpacerContext, SpacerContext } from "../SpacerContext";
import { Property } from "csstype";
import { css } from "@emotion/react";
import { useBigDivEnergy } from "../BigDivEnergyContext";
import React, { useMemo, useState } from "react";

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
  const [containsSpacer, setContainsSpacer] = useState(false);

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

  const spacerContextValue = useMemo<ISpacerContext>(
    () => ({
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
            flex-direction: column;
            align-items: ${alignItems};
            overflow: hidden;
            > *:not(:last-child) {
              margin-bottom: ${spacing}${config.lengthUnit};
            }
          `,
          containsSpacer &&
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
