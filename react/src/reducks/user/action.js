export const LOGIN: string = "LOGIN"
export const login = (userState) => {
    return {
        type: "LOGIN",
        payload: {
            auth: true,
            name: userState.name,
            token: userState.token,
        }
    }
}

export const LOGOUT: string = "LOGOUT"
export const logout = () => {
    return {
        type: "LOGOUT",
        payload: {
            auth: false,
            name: '',
            token: '',
        }
    }
}
