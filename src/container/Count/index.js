import { connect } from 'react-redux'
import CountUi from '../../components/Count'
import {increment} from '../../redux/count_action'

const a = state =>{
  return {count:state}
}

const b = dispatch =>{
  return {
      add:data=> dispatch(increment(data))
    }
  
}

export default connect(a,b)(CountUi)



