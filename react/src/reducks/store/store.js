import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { UserReducer } from '../user/reducers'

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      user: UserReducer,
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
}
