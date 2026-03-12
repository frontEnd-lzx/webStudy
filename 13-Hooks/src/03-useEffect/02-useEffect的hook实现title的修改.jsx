import React, { useState, useEffect } from 'react'
import { Button } from 'antd';

export default function HookCounterChangeTitle() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = counter
  })

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <Button type="primary" onClick={e => setCounter(counter + 1)}>+1</Button>
    </div>
  )
}

