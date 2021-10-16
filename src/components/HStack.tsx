import React from "react";

export const HStack: React.FC = React.memo((props) => {
  return <div {...props} />;
});

HStack.displayName = "HStack";
