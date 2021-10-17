import React, { useContext } from "react";

export interface ISpacerContext {
  container: "HStack" | "VStack";
  setHasSpacer(hasSpacer: boolean): void;
}

export const SpacerContext = React.createContext<ISpacerContext>({
  container: "HStack",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setHasSpacer: () => {},
});

export function useSpacerContext(): ISpacerContext {
  return useContext(SpacerContext);
}
