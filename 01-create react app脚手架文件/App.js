import React, { Component } from 'react'
import { Button } from 'antd';

export default class App extends Component {
  getData = () => {

  }

  render() {
    return (
      <div>
        <b style={{ fontSize: '30px' }}>App</b>
        <Button type="primary">点击获取数据</Button>
      </div>

    )
  }
}

