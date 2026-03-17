import React, { createContext, useContext } from 'react'

import { UserContext, ThemeContext } from '../App'
// 可以看 05-通信/02-使用context通信-类式组件.jsx
export default function parent(props) {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  console.log(user, theme)

  return (
    <div>
      <h2>ContextHookDemo</h2>
    </div>
  )
}
