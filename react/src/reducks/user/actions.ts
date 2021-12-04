type User = {
    id: number,
    name: String,
    token: String
}

export const LOGIN: string = "LOGIN"
export const loginAction = (userState: User) => {
    return {
        type: "LOGIN",
        payload: {
            id: userState.id,
            name: userState.name,
            token: userState.token,
        }
    }
}

export const LOGOUT: string = "LOGOUT"
export const logoutAction = () => {
    return {
        type: "LOGOUT",
        payload: {
            name: '',
            token: '',
        }
    }
}
