import {INCREMENT,DECREMENT} from '../../redux/constant'

export const increment = data =>({type:INCREMENT,data})
export const decrement = data =>({type:DECREMENT,data})

export const incrementAsyn = (data,time) => {
  return (dispatch) =>{
    setTimeout(() =>{
      dispatch(increment(data))
    },time)
  }
}