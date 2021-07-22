import * as React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';


class App extends React.Component {

  public menuSelect = (index: number) =>{
    console.log('选择了菜单项: ', index)
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button autoFocus={true}>Hello</Button>
          <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={(e: any)=>{e.preventDefault();alert(123)}}>Hello</Button>
          <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
          <Button disabled={true} btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
          <Button btnType={ButtonType.Link} href='http://baidu.com'>Hello</Button>
          <Button btnType={ButtonType.Link} href='http://baidu.com' disabled={true}>Hello</Button>
          <hr/>

          <Menu onSelect={this.menuSelect}>
            <MenuItem index={0}>hiuhiiu</MenuItem>
            <MenuItem index={1}>hiuhiiu</MenuItem>
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
