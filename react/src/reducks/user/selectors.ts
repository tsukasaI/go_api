import  {createSelector} from 'reselect'

const userSelector = (state: any) => state.user

export const getUserToken = createSelector(
    [userSelector],
    state => state.token
)
