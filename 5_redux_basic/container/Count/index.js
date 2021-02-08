import { connect } from 'react-redux'
import CountUi from '../../components/Count'
import {increment,decrement,incrementAsyn} from '../../redux/count_action'

const mapStateToProps = state =>{
  return {count:state}
}

const mapDispatchToProps = dispatch =>{
  return {
      incress:data=> dispatch(increment(data)),
      decress:data=> dispatch(decrement(data)),
      deincressOdd:data=> dispatch(decrement(data)),
      incressAsyn:data=> dispatch(incrementAsyn(data,500)),
    }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUi)



