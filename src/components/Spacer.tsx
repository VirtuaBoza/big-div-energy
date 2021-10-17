import { css } from "@emotion/react";
import { useBigDivEnergy } from "..";
import { useSpacerContext } from "../SpacerContext";
import React, { useLayoutEffect } from "react";

export interface SpacerProps {
  minLength?: number;
}

export const Spacer: React.VFC<SpacerProps> = ({ minLength = 0 }) => {
  const { config } = useBigDivEnergy();
  const { container, setHasSpacer } = useSpacerContext();

  useLayoutEffect(() => {
    setHasSpacer(true);
    return () => {
      setHasSpacer(false);
    };
  }, [setHasSpacer]);

  const minLengthValue = `${minLength}${config.lengthUnit}`;
  const minLengthCss =
    container === "HStack"
      ? css`
          min-width: ${minLengthValue};
        `
      : css`
          min-height: ${minLengthValue};
        `;

  return (
    <div
      css={css`
        flex-grow: 1;
        ${minLengthCss}
      `}
    />
  );
};
