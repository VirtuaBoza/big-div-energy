import { Modifier } from "../types";
import React from "react";

export interface ViewModifierProps {
  className: string;
  modifiers?: Modifier[];
}

export const ViewModifier = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ViewModifierProps>
>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});

ViewModifier.displayName = "ViewModifier";
