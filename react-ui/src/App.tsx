import * as React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon'
class App extends React.Component {

  public menuSelect = (index: string) => {
    console.log('选择了菜单项: ', index)
  }

  public render() {
    return (
      <div className="App">
        <Icon icon='coffee' size='10x' />
        <Icon icon='ad' size='10x' />
        <Icon icon='address-book' size='10x' />
        <header className="App-header">
          <Button autoFocus={true}>Hello</Button>
          <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={(e: any) => { e.preventDefault(); alert(123) }}>Hello</Button>
          <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
          <Button disabled={true} btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
          <Button btnType={ButtonType.Link} href='http://baidu.com'>Hello</Button>
          <Button btnType={ButtonType.Link} href='http://baidu.com' disabled={true}>Hello</Button>
          <hr />

          <Menu onSelect={this.menuSelect} mode='vertical'>
            <MenuItem>hiuhiiu</MenuItem>
            <MenuItem>hiuhiiu</MenuItem>
            <SubMenu title='子menu'>
              <MenuItem>huukhihkjhkl</MenuItem>
              <MenuItem>btgbjhnj</MenuItem>
            </SubMenu>
            <MenuItem>hiuhiiu</MenuItem>
          </Menu>

          <Menu onSelect={this.menuSelect} mode='horizontal'>
            <MenuItem>hiuhiiu</MenuItem>
            <MenuItem>hiuhiiu</MenuItem>
            <SubMenu title='子menu'>
              <MenuItem>huukhihkjhkl</MenuItem>
              <MenuItem>btgbjhnj</MenuItem>
            </SubMenu>
            <MenuItem>hiuhiiu</MenuItem>
          </Menu>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
