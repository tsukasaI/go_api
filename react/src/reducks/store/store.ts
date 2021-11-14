import {
  createStore as reduxCreateStore,
  combineReducers,
} from 'redux'
import { UserReducer } from 'reducks/user/reducers'

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      user: UserReducer,
    })
  )
}
