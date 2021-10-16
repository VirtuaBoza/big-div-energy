import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { BigDivEnergy, HStack } from "../src";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: HStack,
  parameters: {
    layout: "fullscreen",
  },
  title: "HStack",
} as ComponentMeta<typeof HStack>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HStack> = (args) => (
  <BigDivEnergy includeReset>
    <HStack {...args} />
  </BigDivEnergy>
);

const ExampleText = ({ size = "26px", text = "Hello, world!" }) => (
  <p style={{ border: "1px solid black", fontSize: size }}>{text}</p>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: (
    <>
      <ExampleText text="Hello, world!!!!!!!!!!!!!!" />
      <ExampleText text="Hello, world!!!!!!!!!!!!!!" />
    </>
  ),
};
