
const initState = {
  majors: null,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_MAJORS_SUCCESS':
      console.log('Successfully fetched majors.')
      return {
        ...state,
        majors: action.payload
      }
    case 'FETCH_MAJORS_FAIL':
      console.log('Failed to fetch majors')
      return {
        ...state,
        error: action.error.message
      }
    case 'FETCH_MAJORS_CACHED':
      console.log('Reusing cached majors')
      return state;
    default:
      return state;
  }
};