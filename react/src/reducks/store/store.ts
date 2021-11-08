import {
  createStore as reduxCreateStore,
  combineReducers,
} from 'redux'
import { UserReducer } from '../user/reducers'

export default function createStore(history: any) {
  return reduxCreateStore(
    combineReducers({
      user: UserReducer,
    })
  )
}
