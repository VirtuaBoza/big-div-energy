import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BigDivEnergy } from "../src";

export default {
  component: BigDivEnergy,
  parameters: {
    layout: "fullscreen",
  },
  title: "BigDivEnergy",
} as ComponentMeta<typeof BigDivEnergy>;

const Template: ComponentStory<typeof BigDivEnergy> = (args) => (
  <BigDivEnergy {...args}>
    <p style={{ border: "1px solid black" }}>Hello, world!</p>
  </BigDivEnergy>
);

export const Default = Template.bind({}) as typeof Template;
Default.args = {
  includeReset: true,
};
