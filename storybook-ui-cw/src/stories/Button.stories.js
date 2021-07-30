import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/button/button';

export default {
  title: 'Buttons',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: 'Button',
  },
};

const Template = args => <Button onClick={action('clicked')} {...args} />

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: 'Button Primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Button Secondary',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  title: 'Button Large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  title: 'Button Small',
  label: 'Button',
};
