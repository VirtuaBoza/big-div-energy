import { css } from "@emotion/react";
import React from "react";

export const HStack: React.VFC = React.memo((props) => {
  return <div css={css``} {...props}></div>;
});

HStack.displayName = "HStack";
