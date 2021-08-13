import React from 'react';

import { Slider } from '../components/Slider/Slider';

export default {
  title: 'tfl/UI/Slider',
  component: Slider,
  argTypes: {
    onInput: { action: 50}
  },
};

const Template = (args) => <Slider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  id: "slider",
};
