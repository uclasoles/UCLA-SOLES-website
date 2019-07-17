import authReducer from './authReducer'
import majorReducer from './majorReducer'
import { combineReducers } from "redux"
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  majors: majorReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;