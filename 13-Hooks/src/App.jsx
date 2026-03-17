import React, { useState, createContext } from 'react'
// import CustomContextShareHook from './11-自定义Hook/02-自定义Hook练习-Context共享'
import CounterHook from '../../05-通信/02-使用context通信-类式组件.jsx'
// import CounterClass from './01-体验hooks/01-counter-class'


// import { Button } from 'antd';

export const UserContext = createContext()
export const ThemeContext = createContext()
export const TokenContext = createContext()

function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      {/* <CustomContextShareHook /> */}

      {/* 验证组件卸载时取消事件订阅，见03文件 */}
      {/* {show && <EffectHookCancelDemo />} */}
      {/* <Button type="primary" onClick={e => setShow(!show)}>切换</Button> */}

      <UserContext.Provider value={{ name: 'TaoLoading', age: 18 }}>
        <TokenContext.Provider value='123456'>
          <CounterHook />
        </TokenContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App

