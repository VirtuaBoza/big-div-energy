import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { BigDivEnergy } from "../src";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: BigDivEnergy,
  parameters: {
    layout: "fullscreen",
  },
  title: "BigDivEnergy",
} as ComponentMeta<typeof BigDivEnergy>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BigDivEnergy> = (args) => (
  <BigDivEnergy {...args}>
    <p style={{ border: "1px solid black" }}>Hello, world!</p>
  </BigDivEnergy>
);

export const Default = Template.bind({}) as typeof Template;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  includeReset: true,
};
