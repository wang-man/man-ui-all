import * as React from 'react'
import {useState, Fragment, useEffect} from 'react'
import useMousePosition from '../hooks/useMousePosition'

const LikeButton: React.FC = () =>{
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  const position = useMousePosition()

  useEffect(()=>{
    console.log('进来了')
    document.title = `点击了${like}次`
  }, [like])
  return (
    <Fragment>
      <button onClick={()=>{setLike(like + 1)}}>
        {like} 👍
      </button>
      <div>
        鼠标位置:X：{position.X}, Y：{position.Y}
      </div>
      <button onClick={()=>{setOn(!on)}}>
        {on ? 'ON' : 'OFF'} 👍
      </button>
    </Fragment>
  )
}

export default LikeButton