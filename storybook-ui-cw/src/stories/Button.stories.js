import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/button/button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: 'Button'
  },
};

export const Template = (args) => <Button onClick={action('clicked')} {...args}>BTN</Button>

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: 'Button Primary',
  label: 'Button',
};

