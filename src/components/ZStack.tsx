import { css } from "@emotion/react";
import React, { Fragment, useLayoutEffect, useRef } from "react";

export const ZStack: React.FC = ({ children }) => {
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

  refs.current = [];

  return (
    <div
      ref={ref}
      css={css`
        background-color: green;
        display: flex;
        align-items: center;
        justify-content: center;
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
