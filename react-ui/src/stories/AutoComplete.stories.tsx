import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import AutoComplete, { DataSourceObject } from '../components/AutoComplete/autoComplete';

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof AutoComplete>;


const data = ['aabbc', 'bbcc', 'ccccdd', 'aaccdddd']

const Template: ComponentStory<typeof AutoComplete> = (args) => {
  // const fetchSuggestionsFun = (str: string) => {
  //   return data.filter(item => item.includes(str)).map(value => ({ value, a: 1, b: 'aaa' }));
  // }
  const fetchSuggestionsFun = async (str: string) => {
    const result = await fetch(`https://api.github.com/search/users?q=${str}`).then(res => {
      return res.json();
    }).then(data => {
      return data.items;
    })
    console.log(result);
    return result.slice(0, 10).map((item: any) => ({ value: item.login, ...item }));
  }

  const renderOption = (item: DataSourceObject, index: number) => {
    return <div>
      <div>用户：{item.value}</div>
      <div>头像：<img src={item.avatar_url} width='20px' alt="" /></div>
    </div>
  }
  return <>
    <AutoComplete fetchSuggestions={fetchSuggestionsFun} renderOption={renderOption} {...args} placeholder='请输入' />
  </>
}
export const AutoCompletes = Template.bind({});
AutoCompletes.args = {
  disabled: false,
};