import React from 'react';

import { Button } from '../components/Buttons/Button';

export default {
  title: 'tfl/UI/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'inline-radio' },
    color: { control: 'inline-radio' },
    border: { control: 'inline-radio' },
    standardButtons: { control: 'inline-radio' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Secondary',
};
