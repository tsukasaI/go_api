import { loginAction } from "./actions"
import axios from 'axios'

export const login = () => {
    return (dispatch: any, getState: any) => {
        const state = getState()
        const auth = state.user.auth
        console.log(212312312, getState())


    }
}
