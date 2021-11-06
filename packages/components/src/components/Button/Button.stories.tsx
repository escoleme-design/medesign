import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<any>;

export const Base: Story = (args: any) => <Button {...args} />
Base.args = {
  children: 'adaaoi'
}
