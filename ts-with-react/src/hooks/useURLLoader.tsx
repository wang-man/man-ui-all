import axios from 'axios'
import { useState, useEffect } from 'react'

const useURLLoader = (url: string, deps: any[] = []) =>{
  const [data, setData] = useState<any>(null)     // 声明data初始设置为null，但因为null也是一个类型，因此就加个any泛型
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    axios.get(url).then(res =>{
      setData(res.data)
      setLoading(false)
    })
  }, deps)

  return [data, loading]
}

export default useURLLoader