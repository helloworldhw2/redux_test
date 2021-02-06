import React, { Component } from 'react'

export default class Count extends Component {
  // state = {count:0}
  // componentDidMount() {
  //   store.subscribe(() =>{
  //     this.setState([])
  //   })
  // }
  
  increme = () =>{
    const {value} = this.selectType
    this.props.add(value*1)
  }
  decreme = () =>{
    const {value} = this.selectType
  }
  incremeByOdd = () =>{
    const {value} = this.selectType
    
  }
  incremeAsyn = () =>{
    const {value} = this.selectType
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
