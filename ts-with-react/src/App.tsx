import React, { useState } from 'react';
// import { Icon, Button, Menu, Progress, Input, AutoComplete, Upload } from 'man-ui'
// import 'man-ui/build/index.css'
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

  const [show, setShow] = useState(true)
  const position = useMousePosition()
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const result = data as response   // 将data重新断言为接口response所提供的形状


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

      </div>

    </div>
  );
}

export default App;
