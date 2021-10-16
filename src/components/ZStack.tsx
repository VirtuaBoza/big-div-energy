import { Alignment } from "../types";
import { Property } from "csstype";
import { css } from "@emotion/react";
import React, { Fragment, useLayoutEffect, useRef } from "react";

export interface ZStackProps {
  alignment?: Alignment;
}

export const ZStack: React.FC<ZStackProps> = ({
  alignment = "center",
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const refs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const height = Math.max(...entries.map((el) => el.contentRect.height));
      const width = Math.max(...entries.map((el) => el.contentRect.width));
      window.requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.height = `${height}px`;
          ref.current.style.width = `${width}px`;
        }
      });
    });
    const els = refs.current;
    els.forEach((el) => {
      resizeObserver.observe(el);
    });
    return () => {
      els.forEach((el) => {
        resizeObserver.unobserve(el);
      });
    };
  }, []);

  const derivedChildren = (() => {
    if (React.isValidElement(children)) {
      if (children.type === Fragment) {
        return children.props.children;
      }
    }
    return children;
  })();

  const { alignItems, justifyContent } = ((): {
    alignItems: Property.AlignContent;
    justifyContent: Property.JustifyContent;
  } => {
    switch (alignment) {
      case "bottom":
        return {
          alignItems: "flex-end",
          justifyContent: "center",
        };
      case "bottomLeading":
        return {
          alignItems: "flex-end",
          justifyContent: "flex-start",
        };
      case "bottomTrailing":
        return {
          alignItems: "flex-end",
          justifyContent: "flex-end",
        };
      case "leading":
        return {
          alignItems: "center",
          justifyContent: "flex-start",
        };
      case "top":
        return {
          alignItems: "flex-start",
          justifyContent: "center",
        };
      case "topLeading":
        return {
          alignItems: "flex-start",
          justifyContent: "flex-start",
        };
      case "topTrailing":
        return {
          alignItems: "flex-start",
          justifyContent: "flex-end",
        };
      case "trailing":
        return {
          alignItems: "center",
          justifyContent: "flex-end",
        };
      default:
        return {
          alignItems: "center",
          justifyContent: "center",
        };
    }
  })();

  refs.current = [];

  return (
    <div
      ref={ref}
      css={css`
        display: flex;
        align-items: ${alignItems};
        justify-content: ${justifyContent};
      `}
    >
      {React.Children.map(derivedChildren, (child, i) => {
        return (
          <div
            key={(React.isValidElement(child) && child.key) || i}
            ref={(el) => {
              if (el) {
                refs.current[i] = el;
              }
            }}
            css={css`
              position: absolute;
              z-index: ${i + 1};
            `}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};
