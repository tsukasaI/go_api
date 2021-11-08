import * as Actions from './actions'
import initialState from '../store/initialState'

export const UserReducer = (state = initialState.user, action: any) => {
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
