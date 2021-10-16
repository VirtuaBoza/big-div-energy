import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { Fragment } from "react";

import { BigDivEnergy, ZStack } from "../src";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: ZStack,
  parameters: {
    layout: "fullscreen",
  },
  title: "ZStack",
} as ComponentMeta<typeof ZStack>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ZStack> = (args) => (
  <BigDivEnergy includeReset>
    <ZStack {...args} />
  </BigDivEnergy>
);

const ExampleText = ({
  color = "transparent",
  size = "26px",
  text = "Hello, world!",
}) => (
  <p
    style={{
      backgroundColor: color,
      border: "1px solid black",
      fontSize: size,
    }}
  >
    {text}
  </p>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: (
    <Fragment>
      <ExampleText text="Hello, world!!!!!!!!!!!!!!" color="red" />
      <ExampleText size="12px" text="Hello, world!!!!!!!!!!!!!!" color="blue" />
    </Fragment>
  ),
};