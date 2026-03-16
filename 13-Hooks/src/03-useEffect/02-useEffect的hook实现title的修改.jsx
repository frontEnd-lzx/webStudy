import React, { useState, useEffect } from 'react'

import { Button } from 'antd';

function Son(props){
  useEffect(() => { //在 React 开发环境开启 StrictMode 时，[] 的 effect 可能看起来执行两次，这是开发期故意行为，生产环境不会这样 ( 会被故意做一次“挂载 -> 卸载 -> 再挂载”的检查流程)
    console.log('son订阅事件')
  
    return () => { // 这就是 cleanup,组件卸载时会执行
      console.log('son取消订阅事件') 
    }
  }, []) //依赖数组为空：只在首次渲染后执行一次（卸载时会执行 cleanup）。类似类组件的 componentDidMount + componentWillUnmount
  
  return(
    <h2 className='mb-4 font-bold text-3xl'>count2: {props.counter2}</h2>
  )
}

export default function HookCounterChangeTitle() {
  const [counter, setCounter] = useState(0)
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  useEffect(() => {
    console.log('counter变化了')
  }, [counter]) //首次执行一次，并且以后只有 count 变化时才执行。
  useEffect(() => {
    document.title = counter1
    console.log('值变化了');
  }) //表示你没有告诉 React 依赖谁，, 那 React 就默认每次渲染后都执行(首次也会执行一次),只要有值变了就会执行（无论使用到了哪个state的值）
  return (
    <div className='m-10'>
      <h2 className='mb-4 font-bold text-3xl'>count: {counter}</h2>
      <h2 className='mb-4 font-bold text-3xl'>count1: {counter1}</h2>
      {counter2 > 2 ? "" :  <Son counter2={counter2}/>}
      <Button className='mr-4' type="primary" onClick={e => setCounter(counter + 1)}>+1</Button>
      <Button type="primary" className='mr-4' onClick={e => setCounter1(counter1 + 1)}>+1</Button>
      <Button type="primary" onClick={e => setCounter2(counter2 + 1)}>+1</Button>
    </div>
  )
}

