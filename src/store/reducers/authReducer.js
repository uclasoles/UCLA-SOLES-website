const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log(action.err.message)
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('Login success');
      return {
        ...state,
        authError: null
      }
    case 'SIGN_OUT_SUCCESS':
      console.log('Sign-out success');
      return state;
    case 'SIGN_OUT_ERROR':
      console.log(action.err.message)
      return {
        ...state,
        authError: 'Logout failed'
      }
    case 'SIGN_UP_SUCCESS':
      console.log('Sign-up success')
      return {
        ...state,
        authError: null
      }
    case 'SIGN_UP_ERROR':
      console.log(action.err.message)
      return {
        ...state,
        authError: action.err.message
      }
    case 'PASSWORD_RESET_SUCCESS':
      console.log('Password reset success')
      return {
        ...state,
        authError: 'success'
      }
    case 'PASSWORD_RESET_ERROR':
      console.log(action.err.message)
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
};

export default authReducer;

