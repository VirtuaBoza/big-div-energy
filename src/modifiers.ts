import { PaddingModifier, PaddingModifierProps } from "./types";

export function padding(props?: PaddingModifierProps): PaddingModifier {
  return {
    props,
    type: "padding",
  };
}
