import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { BigDivEnergy, VStack } from "../src";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: VStack,
  parameters: {
    layout: "fullscreen",
  },
  title: "VStack",
} as ComponentMeta<typeof VStack>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VStack> = (args) => (
  <BigDivEnergy includeReset>
    <VStack {...args} />
  </BigDivEnergy>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: (
    <>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      {/* <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello, world!</p> */}
    </>
  ),
};
