const initialState = {
  count: 0,
  dataTambahan: 'Udin'
}

const basicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {...state, count: state.count + action.payload}
    case "REDUCE_DATA":
      return {...state, count: state.count - action.payload}
    default:
      return state
  }
}

export default basicReducer