import { Container } from "./types";
import {
  ISpacerContext,
  defaultSpacerContext,
  useSpacerContext,
} from "./SpacerContext";
import React, { useCallback, useMemo, useState } from "react";

export interface ISpacerContainerContext {
  spacerContainers: Container[];
  spacerContext: ISpacerContext;
}

export const SpacerContainerContext =
  React.createContext<ISpacerContainerContext>({
    spacerContainers: [],
    spacerContext: defaultSpacerContext,
  });

export function useSpacerContainer(
  container: Container
): ISpacerContainerContext {
  const [spacerContainers, setSpacerContainers] = useState<Container[]>([]);
  const { spacerMounted, spacerUnmounted } = useSpacerContext();

  const spacerMountedCallback = useCallback<ISpacerContext["spacerMounted"]>(
    (ctn) => {
      spacerMounted(container);
      setSpacerContainers((ctrs) => [...ctrs, ctn]);
    },
    [container, spacerMounted]
  );

  const spacerUnmountedCallback = useCallback<
    ISpacerContext["spacerUnmounted"]
  >(
    (ctn) => {
      spacerUnmounted(container);
      setSpacerContainers((ctrs) => {
        const index = ctrs.findIndex((c) => c === ctn);
        if (index >= 0) {
          return [...ctrs].splice(index, 1);
        }
        return ctrs;
      });
    },
    [container, spacerUnmounted]
  );

  return useMemo<ISpacerContainerContext>(
    () => ({
      spacerContainers,
      spacerContext: {
        container,
        spacerMounted: spacerMountedCallback,
        spacerUnmounted: spacerUnmountedCallback,
      },
    }),
    [
      container,
      spacerContainers,
      spacerMountedCallback,
      spacerUnmountedCallback,
    ]
  );
}
