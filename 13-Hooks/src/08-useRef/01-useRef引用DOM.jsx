import React, { useEffect, useRef } from 'react'
import { Button } from 'antd';

class TestCpn extends React.Component {
  render() {
    return <h2>TestCpn</h2>
  }
}

function TestCpn2(props) {
  return <h2>TestCpn2</h2>
}

export default function RefHookDemo01() {

  const titleRef = useRef()
  const inputRef = useRef()
  const testRef = useRef()
  const testRef2 = useRef()

  function changeDOM() {
    titleRef.current.innerHTML = 'Hello World'
    inputRef.current.focus()
    console.log(testRef.current)
    console.log(testRef2.current)
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input ref={inputRef} type="text" />
      <TestCpn ref={testRef} />
      {/* <TestCpn2 ref={testRef2} /> */}

      <Button type="primary" onClick={e => changeDOM()}>修改DOM</Button>
    </div>
  )
}

