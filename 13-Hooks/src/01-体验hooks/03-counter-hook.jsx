import React, { useState } from 'react'
import { Button } from 'antd';

export default function CounterHook() {
  const [count, setCount] = useState(() => 10)

  console.log('CounterHook渲染')

  function handleBtnClick() {
    // setCount(count + 10)
    // setCount(count + 10)
    // setCount(count + 10)
    // setCount(count + 10)
    setCount((prevCount) => prevCount + 10)
    setCount((prevCount) => prevCount + 10)
    setCount((prevCount) => prevCount + 10)
    setCount((prevCount) => prevCount + 10)
  }

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <Button type="primary" onClick={e => setCount(count + 1)}>+1</Button>
      <Button type="primary" onClick={e => setCount((prevCount) => prevCount + 10)}>+10</Button>
      <Button type="primary" onClick={handleBtnClick}>+10</Button>
      <Button type="primary" onClick={e => setCount(count - 1)}>-1</Button>
    </div>
  )
}

