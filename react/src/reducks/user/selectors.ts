import { createSelector } from 'reselect'

const userSelector = (state: any) => state.user

export const getUserToken = createSelector(
  [userSelector],
  state => state.token
)

export const getUserName = createSelector(
  [userSelector],
  state => state.name
)

export const getUserId = createSelector(
  [userSelector],
  state => state.id
)
