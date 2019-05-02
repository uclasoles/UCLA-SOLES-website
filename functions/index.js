const functions = require('firebase-functions');

exports.onCreateUser = functions.firestore.document('users/{userId}').onCreate((snap, context) => {
      const data = snap.data();

      // modify DB data according to user's career
      if (data.career === 'UGRAD' || data.career === 'GRAD') {
      	return snap.ref.set({
      		// this data is constant across all roles
      		firstname: data.firstname,
      		lastname: data.lastname,
      		email: data.email,
      		career: data.career,
      		// specific to students
      		major: data.major,
      		year: data.year,
	        roles: {local_member: false, national_member: false, admin: false, owner: false},
	        test_bank_days: 90,
	      });
      } else if (data.career === 'ALUM') {
      	return snap.ref.set({
      		// this data is constant across all roles
      		firstname: data.firstname,
      		lastname: data.lastname,
      		email: data.email,
      		career: data.career,
      		// specific to alumni
      		company: data.company,
      		grad_year: data.grad_year,
	      });     	
      } else if (data.career === 'IND') {
      	return snap.ref.set({
      		// this data is constant across all roles
      		firstname: data.firstname,
      		lastname: data.lastname,
      		email: data.email,
      		career: data.career,
      		// specific to industry reps
      		company: data.company,
	      }); 
      }
      // Somehow we created a user with an invalid career
      console.log("[ERROR] onCreateUser was passed invalid career field")
      return null;
    });
