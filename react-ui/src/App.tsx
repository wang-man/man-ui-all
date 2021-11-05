import React, { useState } from 'react';

import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Transition from './components/Transition/transition';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
library.add(fas)
const App: React.FC = () => {

  const menuSelect = (index: string) => {
    console.log('选择了菜单项: ', index)
  }
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus={true}>Hello</Button>
        <Button btnType={'primary'} size={'lg'} onClick={(e: any) => { e.preventDefault(); alert(123) }}>Hello</Button>
        <Button btnType={'danger'} size={'sm'}>Hello</Button>
        <Button disabled={true} btnType={'danger'} size={'sm'}>Hello</Button>
        <Button btnType={'link'} href='http://baidu.com'>Hello</Button>
        <Button btnType={'link'} href='http://baidu.com' disabled={true}>Hello</Button>
        <hr />

        <Menu onSelect={menuSelect} mode='vertical'>
          <MenuItem>hiuhiiu</MenuItem>
          <MenuItem>hiuhiiu</MenuItem>
          <SubMenu title='子menu'>
            <MenuItem>huukhihkjhkl</MenuItem>
            <MenuItem>btgbjhnj</MenuItem>
          </SubMenu>
          <MenuItem>hiuhiiu</MenuItem>
        </Menu>

        <Menu onSelect={menuSelect} mode='horizontal'>
          <MenuItem>hiuhiiu</MenuItem>
          <MenuItem>hiuhiiu</MenuItem>
          <SubMenu title='子menu'>
            <MenuItem>huukhihkjhkl</MenuItem>
            <MenuItem>btgbjhnj</MenuItem>
          </SubMenu>
          <MenuItem>hiuhiiu</MenuItem>
        </Menu>

        <Button onClick={() => setShow(!show)} btnType='primary'>Toggle</Button>
        <Transition
          in={show}
          timeout={300}
          classNames='zoom-in-top'
        >
          <div>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          </div>
        </Transition>
      </header>
    </div>
  );

}

export default App;
