export type Alignment =
  | HorizontalAlignment
  | VerticalAlignment
  | "bottomLeading"
  | "bottomTrailing"
  | "topLeading"
  | "topTrailing";

export type HorizontalAlignment = "center" | "leading" | "trailing";
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/length
 */
export type LengthUnit =
  | "cap"
  | "ch"
  | "em"
  | "ex"
  | "ic"
  | "lh"
  | "rem"
  | "rlh"
  | "vh"
  | "vw"
  | "vi"
  | "vb"
  | "vmin"
  | "vmax"
  | "px"
  | "cm"
  | "mm"
  | "Q"
  | "in"
  | "pc"
  | "pt";

export type VerticalAlignment = "bottom" | "center" | "top";

export type Container = "HStack" | "VStack";

type GenericModifier<T extends string, TProps> = {
  props: TProps;
  type: T;
};

export type PaddingModifierProps = undefined;
export type PaddingModifier = GenericModifier<"padding", PaddingModifierProps>;

export type Modifier = PaddingModifier;
