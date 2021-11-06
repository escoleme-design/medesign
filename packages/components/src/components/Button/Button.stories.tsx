import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<any>;

export const Base: Story = (args: any) => <Button {...args} />

Base.args = {
  children: 'Click me',
  // size: 'normal',
  // lowercase: false,
  // href: '',
  // target: '_black',
  // disabled: false,
  // variant: 'Con',
  // className: "",
  // id: "",
  loading: false,
  // type: "button",
  onClick: () => alert("oi"),
  // block: false,
  // success: false,
  // loading: false,
  // danger: false,
}

export const Variants = (args) => (
  <>
    <Button {...args}>
      Contained
    </Button>
  </> 
);
