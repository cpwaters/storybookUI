import React from 'react';
import Navbar from '../components/nav/navbar';

export default {
  title: 'Navigation/navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: 'Button'
  },
};

export const Template = (args) => <Navbar {...args}>NAVBAR</Navbar>

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: 'Navbar Primary',
  label: 'Nav',
};
