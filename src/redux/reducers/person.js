import {ADD_PERSON} from '../constant'

const initState =[{id:'001',name:'lizi',age:25}]
export default function personReduce(preState=initState,action){
  const {type,personObj} = action
  switch (type) {
    case ADD_PERSON:
      console.log(Date.now())
      return [...preState,personObj]
    default:
      return preState
  }
} 