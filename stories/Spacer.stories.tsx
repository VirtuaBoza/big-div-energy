import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BigDivEnergy, HStack, Spacer, VStack } from "../src";

export default {
  component: Spacer,
  parameters: {
    layout: "fullscreen",
  },
  title: "Spacer",
} as ComponentMeta<typeof Spacer>;

export const InHStack: ComponentStory<typeof Spacer> = (args) => (
  <BigDivEnergy includeReset>
    <HStack>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <Spacer {...args} />
      <p style={{ border: "1px solid black" }}>Hello</p>
    </HStack>
  </BigDivEnergy>
);

export const InVStack: ComponentStory<typeof Spacer> = (args) => (
  <BigDivEnergy includeReset>
    <VStack>
      <p style={{ border: "1px solid black" }}>Hello, world!</p>
      <Spacer {...args} />
      <p style={{ border: "1px solid black" }}>Hello</p>
    </VStack>
  </BigDivEnergy>
);
