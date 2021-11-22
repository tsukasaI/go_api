type User = {
    darkMode: boolean
    name: string
    token: string
}

const initialState: {
    user: User
} = {
    user: {
        darkMode: false,
        name: '',
        token: '',
    }
}

export default initialState
