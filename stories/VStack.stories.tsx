import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BigDivEnergy, Spacer, VStack } from "../src";

export default {
  component: VStack,
  parameters: {
    layout: "fullscreen",
  },
  title: "VStack",
} as ComponentMeta<typeof VStack>;

const Template: ComponentStory<typeof VStack> = (args) => (
  <BigDivEnergy includeReset>
    <VStack {...args} />
  </BigDivEnergy>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <p style={{ border: "1px solid black" }}>Hello</p>
    </>
  ),
};
