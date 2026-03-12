import React, { useState, useEffect } from 'react'
import { Button } from 'antd';

export default function EffectCounterDemo() {
  const [count, setCount] = useState(10)

  useEffect(() => {
    if (count === 0) {
      setCount(Math.random() + 200)
    }
  }, [count])

  return (
    <div>
      <h2>数字: {count}</h2>
      <Button type="primary" onClick={e => setCount(0)}>修改数字</Button>
    </div>
  )
}

