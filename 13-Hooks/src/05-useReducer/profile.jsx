import React, { useReducer } from 'react'

import reducer from './reducer'
import { Button } from 'antd';

export default function Profile() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 })

  return (
    <div>
      <h2>Profile当前计数: {state.counter}</h2>
      <Button type="primary" onClick={e => dispatch({ type: 'increment' })}>+1</Button>
      <Button type="primary" onClick={e => dispatch({ type: 'decrement' })}>-1</Button>
    </div>
  )
}

