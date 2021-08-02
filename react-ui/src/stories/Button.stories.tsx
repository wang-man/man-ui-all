import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button/button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    size: {
      options: ['lg', 'sm'],
      control: { type: 'radio' }
    },
    href: {
      control: 'text'
    }

  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <>
    <Button btnType='primary' {...args} />
    <Button btnType='default' {...args} />
    <Button btnType='danger' {...args} />
    <Button btnType='link' {...args} />
  </>
}
export const Buttons = Template.bind({});
Buttons.args = {
  children: 'Button',
  size: 'lg',
  disabled: false,
  href: 'http://',
};