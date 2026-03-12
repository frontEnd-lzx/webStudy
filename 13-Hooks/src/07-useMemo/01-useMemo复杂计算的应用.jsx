import React, { useState, useMemo } from 'react'
import { Button } from 'antd';

function calcNumber(count) {
  console.log('calcNumber重新计算')
  let total = 0
  for (let i = 1; i <= count; i++) {
    total += i
  }
  return total
}

export default function MemoHookDemo01() {
  const [count, setCount] = useState(10)
  const [show, setShow] = useState(true)

  // const total = calcNumber(count);
  const total = useMemo(() => {
    return calcNumber(count)
  }, [count])

  return (
    <div>
      <h2>计算数字的和: {total}</h2>
      <Button type="primary" onClick={e => setCount(count + 1)}>+1</Button>
      <Button type="primary" onClick={e => setShow(!show)}>show切换</Button>
    </div>
  )
}

