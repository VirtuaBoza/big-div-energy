import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import * as React from "react";

export default {
  title: "Welcome",
  component: Welcome
};

export const ToStorybook = () => <Welcome showApp={linkTo("Button")} />;
