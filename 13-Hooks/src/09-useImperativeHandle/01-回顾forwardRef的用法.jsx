import React, { useRef, forwardRef } from 'react'
import { Button } from 'antd';

const HYInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text" />
})

export default function ForwardRefDemo() {
  const inputRef = useRef()

  return (
    <div>
      <HYInput ref={inputRef} />
      <Button type="primary" onClick={e => inputRef.current.focus()}>聚焦</Button>
    </div>
  )
}

