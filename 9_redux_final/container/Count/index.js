import React, { Component } from 'react'
import { connect } from 'react-redux'
import {increment,decrement,incrementAsyn} from '../../redux/actions/count'


class Count extends Component {
  increme = () =>{
    const {value} = this.selectType
    this.props.increment(value*1)
  }
  decreme = () =>{
    const {value} = this.selectType
    this.props.decrement(value*1)
  }
  incremeByOdd = () =>{
    const {value} = this.selectType
    if(this.props.count % 2 !== 0) this.props.increment(value*1)
  }
  incremeAsyn = () =>{
    const {value} = this.selectType
    this.props.incrementAsyn(value*1,500)
  }
  render() {
    // const {count} = this.state
    return (
      <div>
        <h1>我是Count组件</h1>
        <h4>当前值为:{this.props.count}</h4>
        <select ref={e => this.selectType = e}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increme}>+</button>
        <button onClick={this.decreme}>-</button>
        <button onClick={this.incremeByOdd}>奇数+</button>
        <button onClick={this.incremeAsyn}>Asyn+</button>
      </div>
    )
  }
}

export default connect(
    state => ( {count:state.count}),
    {
      increment,
      decrement,
      incrementAsyn
    }
  )(Count)



