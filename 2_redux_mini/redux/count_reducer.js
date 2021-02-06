const defaultData = 0
export default function countReducer(preState=defaultData,action){
  const {type,data} = action
  switch(type){
    case 'incress':
      return preState + data
    
    case 'decress':
      return preState - data
    default: 
      return preState
    
  }
}