type User = {
    darkMode: boolean
    id: number
    name: string
    token: string
}

const initialState: {
    user: User
} = {
    user: {
        darkMode: false,
        id: 0,
        name: '',
        token: '',
    }
}

export default initialState
