import * as React from 'react';
import {useState} from 'react';
import './App.css';

import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
// import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'

const App: React.FC = () =>{
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
          <button onClick={()=>{setShow(!show)}}>切换button</button>
          {/* <MouseTracker /> */}
      </header>
      {
        loading ? <p>🐕加载中。。。</p> : 
        <img src={result && result.message} />
      }
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
