import {
  BigDivEnergyContext,
  IBigDivEnergyContext,
  defaultConfig,
} from "../BigDivEnergyContext";
import { Global, css } from "@emotion/react";
import React, { useLayoutEffect, useMemo, useRef } from "react";

export interface BigDivEnergyProps {
  includeReset?: boolean;
}

export const BigDivEnergy: React.FC<BigDivEnergyProps> = ({
  children,
  includeReset,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const resizeHeight = () => {
      window.requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.height = `${window.innerHeight}px`;
        }
      });
    };
    resizeHeight();
    window.addEventListener("resize", resizeHeight);
    return () => {
      window.removeEventListener("resize", resizeHeight);
    };
  }, []);

  const value = useMemo<IBigDivEnergyContext>(
    () => ({
      config: defaultConfig,
    }),
    []
  );

  return (
    <BigDivEnergyContext.Provider value={value}>
      {includeReset && (
        <Global
          styles={css`
            /* Box sizing rules */
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            /* Remove default margin */
            body,
            h1,
            h2,
            h3,
            h4,
            p,
            figure,
            blockquote,
            dl,
            dd {
              margin: 0;
              overflow-wrap: anywhere;
            }

            /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
            ul[role="list"],
            ol[role="list"] {
              list-style: none;
            }

            html {
              // https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/
              height: -webkit-fill-available;
            }

            /* Set core root defaults */
            html:focus-within {
              scroll-behavior: smooth;
            }

            /* Set core body defaults */
            body {
              min-height: 100vh;
              // https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/
              min-height: -webkit-fill-available;
              text-rendering: optimizeSpeed;
            }

            /* A elements that don't have a class get default styles */
            a:not([class]) {
              text-decoration-skip-ink: auto;
            }

            /* Make images easier to work with */
            img,
            picture {
              max-width: 100%;
              display: block;
            }

            /* Inherit fonts for inputs and buttons */
            input,
            button,
            textarea,
            select {
              font: inherit;
            }

            /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
            @media (prefers-reduced-motion: reduce) {
              html:focus-within {
                scroll-behavior: auto;
              }

              *,
              *::before,
              *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
              }
            }
          `}
        />
      )}
      <div
        ref={ref}
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        `}
      >
        {children}
      </div>
    </BigDivEnergyContext.Provider>
  );
};
