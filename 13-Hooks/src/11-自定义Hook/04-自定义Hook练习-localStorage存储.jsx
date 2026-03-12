import React, { useState, useEffect } from 'react'

import useLocalStorage from '../hooks/local-store-hook'
import { Button } from 'antd';

export default function CustomDataStoreHook() {
  const [name, setName] = useLocalStorage('name')

  return (
    <div>
      <h2>CustomDataStoreHook: {name}</h2>
      <Button type="primary" onClick={e => setName('TaoLoading')}>设置name</Button>
    </div>
  )
}

