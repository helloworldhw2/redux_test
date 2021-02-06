import React, { Component } from 'react'

export default class Count extends Component {
  state = {count:0}
  increme = () =>{
    const {value} = this.selectType
    const result = this.state.count + value*1
    this.setState({count:result})
  }
  decreme = () =>{
    const {value} = this.selectType
    const result = this.state.count - value*1
    this.setState({count:result})
  }
  incremeByOdd = () =>{
    const {value} = this.selectType
    if (this.state.count % 2 !== 0){
      const result = this.state.count + value*1
      this.setState({count:result})
    }
    
  }
  incremeAsyn = () =>{
    const {value} = this.selectType
    setTimeout(() =>{
      const result = this.state.count + value*1
      this.setState({count:result})
    },500)
  }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>当前值为:{count}</h1>
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
