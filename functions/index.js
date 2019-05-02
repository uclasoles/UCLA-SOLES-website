const functions = require('firebase-functions');

exports.createUser = functions.firestore.document('users/{userId}').onCreate((snap, context) => {
      const data = snap.data();

      return snap.ref.set({
        company: data.company === '' ? null : data.company,
        grad_year: data.grad_year === '' ? null : data.grad_year,
        major: data.major === '' ? null : data.major,
        year: data.year === '' ? null : data.year,
        roles: {local_member: false, national_member: false, admin: false, owner: false},
        test_bank_days: 90,
      }, {merge: true});
    });
