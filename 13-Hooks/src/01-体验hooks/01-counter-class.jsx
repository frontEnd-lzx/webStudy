import React, { PureComponent } from 'react'

import { Button } from 'antd';
import { Fragment } from 'react';

class Son extends PureComponent{
  constructor(props) {
    super(props)
    this.state = {

    }

  }
  render() {
    const { sonCounter, onSonCounterChange } = this.props
    return (
      <Fragment>
        <div className='text-3xl font-bold'>son: {sonCounter}</div>
        <Button onClick={onSonCounterChange}>sonCounter+1</Button>
      </Fragment>    
    )
  }
}

export default class CounterClass extends PureComponent {
  constructor(props) {
    super(props)

  }
  
  state = {
    counter: 0,
    sonCounter: 10
  }

  render() {
    console.log('class counter render 渲染')
    return (
      <div className='m-4 mb-20'>
        <h2 className='mb-4'>当前计数: {this.state.counter}</h2>
        <div className='mb-10'>
          <Button type="primary" className='mr-4' onClick={e => this.increment()}>+1</Button>
          <Button onClick={e => this.decrement()}>-1</Button>
        </div>

        <Son sonCounter={this.state.sonCounter} onSonCounterChange={this.onSonCounterChange}></Son>
        {/* 本质上是把一个“裸函数引用”交给了事件系统。等它以后被调用时，调用位置变了，this 也就可能变成 undefined（在严格模式下）或者不是你期望的组件实例，于是 this.setState 就会报错。ES class 的方法遵循普通 ES6 class 语义，不会自动绑定实例 */}

        <Son sonCounter={this.state.sonCounter} onSonCounterChange={() => this.onSonCounterChange1()}></Son>
      </div>
    )
  }

  onSonCounterChange = () => { //最好这样写，不使用onSonCounterChange1的写法
    this.setState((preState, props) => { //建议：只要依赖上一次 state，就用函数写法。
      // console.log("🚀 ~ :51 ~ CounterClass ~ onSonCounterChange ~ preState:", preState)
      return {
        sonCounter: preState.sonCounter + 1 
      }
    })
    // console.log("🚀 ~ :59 ~ CounterClass ~ onSonCounterChange ~ this:", this)
    // this.setState({
    //   sonCounter: this.state.sonCounter + 1
    // })
  }

  onSonCounterChange1() {
    this.setState((preState, props) => { //建议：只要依赖上一次 state，就用函数写法。
      return {
        sonCounter: preState.sonCounter + 1 
      }
    })
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 })//把新的状态对象提交给 React，React 再根据新状态重新渲染组件。setState() 的本质不是“立刻改值”，而是请求 React 安排一次更新。
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 })
  }

  // 写法一：传对象
  // 这种场景很安全，因为你只是把某个字段改成固定值。React 类组件的 setState 会把你传入的对象与当前 state 做浅合并，所以只需要传变化的字段，不需要把整个 state 都写出来
  // this.setState({
  //   count: 10
  // })
  // this.setState({
  //   loading: true
  // })
  
  // 适合：新状态不依赖旧状态时。
  
  
  
  
  // 写法二：传函数
  // this.setState((prevState, props) => {
  //   return {
  //     count: prevState.count + 1
  //   }
  // })

  // 适合：新状态依赖旧状态，或者依赖当前 props 时。

  // 这是非常重要的一条。因为 setState 可能会被批量处理、延后执行，所以直接写：

  // this.setState({
  //   count: this.state.count + 1
  // })

  // 在连续调用时可能拿到的不是你以为的“最新值”。官方建议：只要依赖上一次 state，就用函数写法。

}

