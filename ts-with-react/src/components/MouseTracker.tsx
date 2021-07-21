import * as React from 'react'
import {useState, Fragment, useEffect} from 'react'

const MouseTracker: React.FC = () =>{
  const [position, setPosition] = useState({x:0, y: 0})

  useEffect(()=>{
    console.log('点击了b')
    const mouseClickHandle = (e: MouseEvent) =>{
      console.log('点击了c')
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    document.addEventListener('click', mouseClickHandle)
    
    return ()=>{
      console.log('点击了d')
      document.removeEventListener('click', mouseClickHandle)
    }
  }, [])
  console.log('点击了a')

  return (
    <Fragment>
      <p>
        X：{position.x}, Y: {position.y}
      </p>
    </Fragment>
  )
}

export default MouseTracker