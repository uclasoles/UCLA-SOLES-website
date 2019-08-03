export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGN_OUT_SUCCESS' })
    }, function (err) {
      dispatch({ type: 'SIGN_OUT_ERROR', err})
    });
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.passwordOne
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        major: newUser.major,
        career: newUser.career,
        year: newUser.year,
        gradYear: newUser.gradYear,
        company: newUser.company
      });
    }).then(() => {
      dispatch({ type: 'SIGN_UP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGN_UP_ERROR', err});
    });
  }
}

export const resetPassword = (email) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().sendPasswordResetEmail(
      email
    ).then(() => {
      dispatch({ type: 'PASSWORD_RESET_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'PASSWORD_RESET_ERROR', err});
    });
  }
}

export const changePassword = (newPassword) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().currentUser.updatePassword(
      newPassword
    ).then(() => {
      dispatch({ type: 'PASSWORD_CHANGE_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'PASSWORD_CHANGE_ERROR', err});
    });
  }
}