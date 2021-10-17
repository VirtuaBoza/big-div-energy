import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BigDivEnergy, HStack, Spacer, VStack, padding } from "../src";

export default {
  // component: VStack,
  parameters: {
    layout: "fullscreen",
  },
  title: "Example",
} as ComponentMeta<typeof VStack>;

const Template: ComponentStory<typeof VStack> = () => (
  <BigDivEnergy includeReset>
    <VStack alignment="leading" modifiers={[padding()]}>
      <p>Turtle Rock</p>
      <HStack>
        <p>Joshua Tree National Park</p>
        <Spacer />
        <p>California</p>
      </HStack>
    </VStack>
  </BigDivEnergy>
);

export const Default = Template.bind({});
