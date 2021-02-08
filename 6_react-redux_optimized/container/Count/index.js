import React, { Component } from 'react'
import { connect } from 'react-redux'
import {increment,decrement,incrementAsyn} from '../../redux/count_action'


class Count extends Component {
  increme = () =>{
    const {value} = this.selectType
    this.props.incress(value*1)
  }
  decreme = () =>{
    const {value} = this.selectType
    this.props.decress(value*1)
  }
  incremeByOdd = () =>{
    const {value} = this.selectType
    if(this.props.count % 2 !== 0) this.props.incress(value*1)
  }
  incremeAsyn = () =>{
    const {value} = this.selectType
    this.props.incressAsyn(value*1,500)
  }
  render() {
    // const {count} = this.state
    return (
      <div>
        <h1>当前值为:{this.props.count}</h1>
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
    state => ( {count:state}),
    {
      incress:increment,
      decress:decrement,
      incressAsyn:incrementAsyn
    }
  )(Count)



