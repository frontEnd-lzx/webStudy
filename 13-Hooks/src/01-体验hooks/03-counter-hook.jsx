import React, { useState } from 'react'

import { Button } from 'antd';
// TODO 使用useState(() => 10)的意义

/**
 * 计数器 Hook 示例组件。
 */
export default function CounterHook() {
  const [count, setCount] = useState(() => 10)
  /**
   * 连续执行函数式更新，演示多次更新的累计效果。
   */
  
  function handleBtnClick() {
    setCount((prevCount) => prevCount + 10)
      // setCount((prevCount) => prevCount + 10)
      // setCount((prevCount) => prevCount + 10)
      // setCount((prevCount) => prevCount + 10)
  }

  return (
    <div className='m-10'>
      <h2 className='mb-4'>当前计数: {count}</h2>
      <Button className='mr-4' type="primary" onClick={e => setCount(count + 1)}>+1</Button>
      <Button className='mr-4' type="primary" onClick={e => setCount((prevCount) => prevCount + 10)}>+10</Button>
      <Button className='mr-4' type="primary" onClick={handleBtnClick}>+10</Button>
      <Button type="primary" onClick={e => setCount(count - 1)}>-1</Button>
    </div>
  )
}
