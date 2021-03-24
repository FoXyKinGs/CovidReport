const initialState = {
  list: [],
  listLoading: true,
  listError: false,
  errMessage: null
}

const coronaReducers = (state = initialState, action) =>{
  switch (action.type) {
    case 'GET_ALL_DATA_PENDING':
      return{...state, listLoading : true}
    case 'GET_ALL_DATA_FULFILLED':
      return{...state, listLoading : false, list: action.payload}
    case 'GET_ALL_DATA_ERROR':
      return{...state, listLoading : false, listError: true, errMessage: 'Error'}
    default:
      return state
  }
}

export default coronaReducers