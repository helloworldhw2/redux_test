import React, { Component } from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {addPersonRedux} from '../../redux/actions/person'

class Person extends Component {
  showInfo = () => {
    const {name,age} = this
    const personObj = {id:nanoid(),name:name.value,age:age.value}
    this.props.addPerson(personObj)
    name.value = ''
    age.value = ''
  }
  render() {
    return (
      <div>
        <h1>Person</h1>
        <p>求和为{this.props.countData}</p>
        姓名：<input ref={e => this.name = e} type="text"/>  
        年龄： <input ref={e => this.age = e} type="text"/>
        <button onClick={this.showInfo}>添加</button>
        {
          this.props.personData.map((item) => {
             return <p key={item.id}>姓名：{item.name} 年龄: {item.age}</p>
          })
        }
      </div>
    )
  }
}

export default connect(
  state => ({personData:state.person,countData:state.count}),
  {
    addPerson:addPersonRedux
  }
)(Person)
