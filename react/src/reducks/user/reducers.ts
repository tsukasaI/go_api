import * as Actions from './actions'
import initialState from '../store/initialState'

type ActionType = { type: String, payload: {name: String, token: String} }

export const UserReducer = (state = initialState.user, action: ActionType) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
