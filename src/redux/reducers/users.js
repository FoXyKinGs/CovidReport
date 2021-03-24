const initialState = {
  list: [],
  listLoading: true,
  listError: false,
  errMessage: null
}

const usersReducers = (state=initialState, action) => {
  switch (action.type) {
    case "GET_ALL_USERS_PENDING":
      return {...state, listLoading: true}
    case "GET_ALL_USERS_FULFILLED":
      return {...state, listLoading: false, list: action.payload}
    case "GET_ALL_USERS_REJECTED":
      return {...state, listLoading: false, listError: true, errMessage: 'Error'}
    default:
      return state
  }
}

export default usersReducers