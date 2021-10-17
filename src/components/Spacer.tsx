import { css } from "@emotion/react";
import { useSpacer } from "../SpacerContext";
import React from "react";

export const Spacer: React.VFC = () => {
  useSpacer();
  return (
    <div
      css={css`
        flex-grow: 1;
      `}
    />
  );
};
