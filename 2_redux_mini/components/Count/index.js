import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
  state = {count:0}
  // componentDidMount() {
  //   store.subscribe(() =>{
  //     this.setState([])
  //   })
  // }
  
  increme = () =>{
    const {value} = this.selectType
    store.dispatch({type:'incress',data:value*1})
  }
  decreme = () =>{
    const {value} = this.selectType
    store.dispatch({type:'decress',data:value*1})
  }
  incremeByOdd = () =>{
    const {value} = this.selectType
    if (store.getState() % 2 !== 0){
      store.dispatch({type:'incress',data:value*1})
    }
    
  }
  incremeAsyn = () =>{
    const {value} = this.selectType
    setTimeout(() =>{
      store.dispatch({type:'incress',data:value*1})
    },500)
  }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>当前值为:{store.getState()}</h1>
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
