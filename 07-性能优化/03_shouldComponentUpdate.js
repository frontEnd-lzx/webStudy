import React, { Component } from 'react'
import { Button } from 'antd';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      message: 'Hello World'
    }
  }

  render() {
    console.log('App render函数被调用')
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <Button type="primary" onClick={e => this.increment()}>+1</Button>
        <Button type="primary" onClick={e => this.changeText()}>改变文本</Button>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }

    return false;
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeText() {
    this.setState({
      message: '你好啊,李银河'
    })
  }
}

