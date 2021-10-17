import React, { useContext, useLayoutEffect } from "react";

export interface ISpacerContext {
  setHasSpacer(hasSpacer: boolean): void;
}

export const SpacerContext = React.createContext<ISpacerContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setHasSpacer: () => {},
});

export function useSpacer(): void {
  const { setHasSpacer } = useContext(SpacerContext);
  useLayoutEffect(() => {
    setHasSpacer(true);
    return () => {
      setHasSpacer(false);
    };
  });
}
