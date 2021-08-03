import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../components/Input/input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Input>;

const ControlInput = () => {
  const [value, setValue] = useState('');
  return <Input value={value} onChange={e => { setValue(e.target.value) }} />
}


const changeHandle = (e) => {
  console.log(e.target.value)
}

const Template: ComponentStory<typeof Input> = (args) => {
  return <>
    <Input size='lg' {...args} placeholder='请输入' />
    <Input size='sm' {...args} placeholder='请输入' onChange={changeHandle} />
    受控组件：
    <ControlInput />
  </>
}
export const Inputs = Template.bind({});
Inputs.args = {
  disabled: false,
};