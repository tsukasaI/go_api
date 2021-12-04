import { loginAction } from "./actions"
import axios from 'axios'

export const login = () => {
    return (dispatch: any, getState: any) => {
        const state = getState()
        const darkMode = state.user.darkMode
    }
}
