import React, { useContext } from "react";

export type Container = "HStack" | "VStack";

export interface ISpacerContext {
  container: Container;
  spacerMounted(container: Container): void;
  spacerUnmounted(container: Container): void;
}

export const defaultSpacerContext: ISpacerContext = {
  container: "HStack",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  spacerMounted: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  spacerUnmounted: () => {},
};

export const SpacerContext =
  React.createContext<ISpacerContext>(defaultSpacerContext);

export function useSpacerContext(): ISpacerContext {
  return useContext(SpacerContext);
}
