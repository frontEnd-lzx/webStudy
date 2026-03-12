import React, { PureComponent } from 'react'
import { Button } from 'antd';

export default class CounterClass extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    console.log('class counter渲染')
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <Button type="primary" onClick={e => this.increment()}>+1</Button>
        <Button type="primary" onClick={e => this.decrement()}>-1</Button>
      </div>
    )
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 })
  }
}

