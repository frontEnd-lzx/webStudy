import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './TransitionGroup.css'
import { Button } from 'antd';

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      names: ['name1', 'name2', 'name3']
    }
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          {
            this.state.names.map((item, index) => {
              return (
                <CSSTransition key={item}
                  timeout={500}
                  classNames="item">
                  <div>
                    {item}
                    <Button type="primary" onClick={e => this.removeItem(index)}>-</Button>
                  </div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <Button type="primary" onClick={e => this.addName()}>+name</Button>
      </div>
    )
  }

  addName() {
    this.setState({
      names: [...this.state.names, 'name1']
    })
  }

  removeItem(index) {
    // index indey indez
    this.setState({
      names: this.state.names.filter((item, indey) => index !== indey)
    })
  }
}

