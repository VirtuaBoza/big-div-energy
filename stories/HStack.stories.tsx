import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BigDivEnergy, HStack } from "../src";

export default {
  component: HStack,
  parameters: {
    layout: "fullscreen",
  },
  title: "HStack",
} as ComponentMeta<typeof HStack>;

const Template: ComponentStory<typeof HStack> = (args) => (
  <BigDivEnergy includeReset>
    <HStack {...args} />
  </BigDivEnergy>
);

const ExampleText = ({ size = "26px", text = "Hello, world!" }) => (
  <p style={{ border: "1px solid black", fontSize: size }}>{text}</p>
);

export const Default = Template.bind({}) as typeof Template;
Default.args = {
  children: (
    <>
      <ExampleText text="Hello" />
      <ExampleText text="Hello, world!!!!!!!!!!!!!!" />
    </>
  ),
};
