import {createStore,applyMiddleware,combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'

const allReduces = combineReducers({
  count:countReducer,
  person:personReducer
}) 

export default createStore(allReduces,applyMiddleware(thunk));