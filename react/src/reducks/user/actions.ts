export const LOGIN: string = "LOGIN"
export const loginAction = (userState: any) => {
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
export const logoutAction = () => {
    return {
        type: "LOGOUT",
        payload: {
            auth: false,
            name: '',
            token: '',
        }
    }
}
