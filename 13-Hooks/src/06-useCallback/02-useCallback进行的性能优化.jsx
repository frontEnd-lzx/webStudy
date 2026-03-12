import React, { useState, useCallback, memo } from 'react'
import { Button } from 'antd';

/**
 * useCallback在什么时候使用？
 * 场景: 在将一个组件中的函数, 传递给子元素进行回调使用时, 使用useCallback对函数进行处理
 */

const HYButton = memo((props) => {
  console.log('HYButton重新渲染: ' + props.title)
  return <Button type="primary" onClick={props.increment}>HYButton +1</Button>
})

export default function CallbackHookDemo02() {
  console.log('CallbackHookDemo02重新渲染')

  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  const increment1 = () => {
    console.log('执行increment1函数')
    setCount(count + 1)
  }

  const increment2 = useCallback(() => {
    console.log('执行increment2函数')
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <h2>CallbackHookDemo01: {count}</h2>
      {/* <Button type="primary" onClick={increment1}>+1</Button>
      <Button type="primary" onClick={increment2}>+1</Button> */}
      <HYButton title="btn1" increment={increment1} />
      <HYButton title="btn2" increment={increment2} />

      <Button type="primary" onClick={e => setShow(!show)}>show切换</Button>
    </div>
  )
}

