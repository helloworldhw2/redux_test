import {INCREMENT,DECREMENT} from '../../redux/constant'

const defaultData = 0
export default function countReducer(preState=defaultData,action){
  const {type,data} = action
  switch(type){
    case INCREMENT:
      return preState + data
    
    case DECREMENT:
      return preState - data
    default: 
      return preState
    
  }
}