import React, { PureComponent } from 'react'
import "./SwitchTransition.css"
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { Button } from 'antd';

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOn: true
    }
  }

  render() {
    const { isOn } = this.state

    return (
      <div>
        <SwitchTransition mode="out-in">
          <CSSTransition key={isOn ? "on" : "off"}
            classNames="btn"
            timeout={1000}>
            <Button type="primary" onClick={e => this.setState({ isOn: !isOn })}>
              {isOn ? "on" : "off"}
            </Button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}

