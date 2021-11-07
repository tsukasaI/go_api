import  {createSelector} from 'reselect'

const userSelector = (state) => state.user

export const getUserToken = createSelector(
    [userSelector],
    state => state.token
)
