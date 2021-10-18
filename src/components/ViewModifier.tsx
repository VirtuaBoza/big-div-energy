import { Edge, Modifier, ModifierType } from "../types";
import { SerializedStyles, css } from "@emotion/react";
import { useBigDivEnergy } from "../BigDivEnergyContext";
import React from "react";

export interface ViewModifierProps {
  className: string;
  modifiers?: Modifier[];
}

export const ViewModifier = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ViewModifierProps>
>(({ children, className, modifiers = [] }, ref) => {
  const { config } = useBigDivEnergy();
  const resolvedModifiers = modifiers.reduce(
    (acc, cur) => {
      switch (cur.type) {
        case "padding": {
          const { paddingBottom, paddingLeft, paddingRight, paddingTop } =
            ((): {
              paddingBottom: number;
              paddingLeft: number;
              paddingRight: number;
              paddingTop: number;
            } => {
              const [firstArg, secondArg] = cur.props;
              if (typeof firstArg === "number") {
                return {
                  paddingBottom: firstArg,
                  paddingLeft: firstArg,
                  paddingRight: firstArg,
                  paddingTop: firstArg,
                };
              }

              if (typeof firstArg === "string") {
                const length = secondArg || 16;
                return {
                  paddingBottom: (
                    ["all", "bottom", "vertical"] as Edge[]
                  ).includes(firstArg)
                    ? length
                    : 0,
                  paddingLeft: (
                    ["all", "horizontal", "leading"] as Edge[]
                  ).includes(firstArg)
                    ? length
                    : 0,
                  paddingRight: (
                    ["all", "horizontal", "trailing"] as Edge[]
                  ).includes(firstArg)
                    ? length
                    : 0,
                  paddingTop: (["all", "top", "vertical"] as Edge[]).includes(
                    firstArg
                  )
                    ? length
                    : 0,
                };
              }

              return {
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              };
            })();

          acc.push([
            {
              css: css`
                padding-top: ${paddingTop}${config.lengthUnit};
                padding-right: ${paddingRight}${config.lengthUnit};
                padding-bottom: ${paddingBottom}${config.lengthUnit};
                padding-left: ${paddingLeft}${config.lengthUnit};
              `,
              type: cur.type,
            },
          ]);
          break;
        }
        default:
          break;
      }
      return acc;
    },
    [[]] as Array<{
      css: SerializedStyles;
      type: ModifierType;
    }>[]
  );

  const [first, ...rest] = resolvedModifiers;

  return rest.reduce(
    (acc, cur) => (
      <div className={className} css={cur.map((c) => c.css)}>
        {acc}
      </div>
    ),
    <div ref={ref} className={className} css={first.map((c) => c.css)}>
      {children}
    </div>
  );
});

ViewModifier.displayName = "ViewModifier";
