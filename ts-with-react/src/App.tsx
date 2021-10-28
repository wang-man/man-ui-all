import React, { useState } from 'react';
import { Icon, Button, Menu, Progress, Input, AutoComplete, Upload } from 'man-ui'
import 'man-ui/build/index.css'
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
// import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
const App: React.FC = () => {
  interface response {
    message: string,
    status: string
  }

  interface DataSourceObject {
    value: string;
    [key: string]: any
  }
  const [show, setShow] = useState(true)
  const position = useMousePosition()
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const result = data as response   // 将data重新断言为接口response所提供的形状


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

  const action =
    'https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload'
  const Authorization = 'Bearer 3d4e9571-4f5f-4322-bc1f-8553f8ff4eef'

  return (
    <div className="App">
      <header className="App-header">
        <div>
          鼠标位置:X：{position.X}, Y：{position.Y}
        </div>
        <Hello message='Hello World' />
        {show && <LikeButton />}
        <button onClick={() => { setShow(!show) }}>切换button</button>
        {/* <MouseTracker /> */}
      </header>
      <div>
        {
          loading ? <p>🐕加载中。。。</p> :
            <img src={result && result.message} width='100' />
        }
      </div>

      <div style={{ width: '600px' }}>
        <h2>一下是测试react-ui打包后的组件</h2>
        <br />
        <br />
        <Button btnType='default'>man-ui按钮</Button>
        <Button btnType='primary'>man-ui按钮</Button>
        <Button btnType='danger'>man-ui按钮</Button>
        <br />
        <br />
        <Menu>
          <Menu.Item>Navigation 1</Menu.Item>
          <Menu.Item>Navigation 2</Menu.Item>
          <Menu.SubMenu title='Navigation 3'>
            <Menu.Item>option 1</Menu.Item>
            <Menu.Item>option 2</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>Navigation 4</Menu.Item>
        </Menu>
        <br />
        <Icon icon='coffee' size='lg' />
        <Icon icon='apple-alt' size='lg' />
        <Icon icon='angry' size='lg' />
        <br />
        <br />
        <br />
        <Progress percent={30} />
        <br />

        <Input />
        <br />

        <AutoComplete fetchSuggestions={fetchSuggestionsFun} renderOption={renderOption} placeholder='请输入' />


        <Upload
          action={action}
          headers={{
            Authorization
          }} ><Button>上传</Button></Upload>
      </div>

    </div>
  );
}

export default App;
