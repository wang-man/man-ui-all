// import * as React from 'react'

import {useState, useEffect} from 'react'

const useMousePosition = ()=>{
  const [positions, setPositions] = useState({X: 0, Y: 0})
  useEffect(()=>{
    console.log('useMousePositon')
    const updateMouse = (e: MouseEvent)=>{
      setPositions({
        X: e.clientX,
        Y: e.clientY
      })
    }
    document.addEventListener('mousemove', updateMouse)
  }, [])
  return positions
}

export default useMousePosition