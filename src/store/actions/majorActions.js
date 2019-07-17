
export const fetchMajors = () => {
  return (dispatch, getState, {getFirestore}) => {
    if (getState().majors.majors == null) {
      const majorsRef = getFirestore().collection('majors');
      majorsRef.get().then(function(querySnapshot) {
        var majors = []
        querySnapshot.forEach(function(doc) {
          majors.push(doc.data().name)
        });
        dispatch({
          type: 'FETCH_MAJORS_SUCCESS',
          payload: majors
        });
      }).catch(function(error) {
        dispatch({
          type: 'FETCH_MAJORS_FAIL',
          error
        });
      });
    } else {
      dispatch({
        type:'FETCH_MAJORS_CACHED'
      });
    }
  }
};
  