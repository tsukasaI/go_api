type User = {
    auth: boolean
    name: string
    token: string
}

const initialState: {
    user: User
} = {
    user: {
        auth: false,
        name: '',
        token: '',
    }
}

export default initialState
