// export const addUser = (newUser) => {
//     //returns the type of action and data to send to the store
//     return (dispatch, state, { getFirestore }) => {
//       getFirestore()
//       .collection("users")
//       .add({ ...newUser, timestamp: getFirestore().FieldValue.serverTimestamp() })
//       .then(
//         () => {},
//         () => {}
//       )
//       // type: "ADD_USER",
//       // payload: newUser,
//     };
//   };

//   export const deleteUser = (userId) => {
//     return (dispatch, state, { getFirestore }) => {
//       getFirestore()
//         .collection("users")
//         .doc(userId)
//         .delete()
//         .then(() => {});
    
//       // type: "DELETE_USER",
//       // payload: userId,
//     };
//   };
  
//   export const editUser = (userId, updatedUser) => {
//     return (dispatch, state, { getFirestore }) => {
//       getFirestore()
//         .collection("users")
//         .doc(userId)
//         .update(updatedUser)
//         .then(() => {});
//       // type: "EDIT_USER",
//       // payload: {userId, updatedUser},
//     };
//   };

//   export const getAllUsers = () => {
//     return (dispatch, state, { getFirestore }) => {
//       getFirestore()
//         .collection("users")
//         .orderBy("timestamp", "desc")
//         .onSnapshot(
//           (snapshot) => {
//             let users = [];
//             snapshot.forEach((doc) => {
//               users.push({...doc.data(), id: doc.id});
//             });
//             console.log(users);
//             dispatch({ type: "SET_ALL_USERS", payload: users });
//           },
//           (error) => {}
//         );
//     };
//   };

export const addUser = (user) => {
	return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("users")
			.add({ ...user, timestamp: getFirestore().FieldValue.serverTimestamp() })
			.then(() => {});
	};

	// return (dispatch, state, { getFirestore }) => {
	// 	getFirestore()
	// 		.collection("users")
	// 		.add(user)
	// 		.then(() => {
	// 			dispatch({
	// 				type: "ADD_USER",
	// 				payload: user,
	// 			});
	// 		});
	// };

	// console.log("addUser", user);
	// //user.id = Math.random().toString();
};

export const deleteUser = (userId) => {
	return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("users")
			.doc(userId)
			.delete()
			.then(() => {});
	};

	// return {
	// 	type: "DELETE_USER",
	// 	payload: userId,
	// };
};

export const editUser = (userId, updatedUser) => {
	return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("users")
			.doc(userId)
			.update(updatedUser)
			.then(() => {});
	};
};

export const getAllUsers = () => {
	return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("users")
			.orderBy("timestamp", "desc")
			.onSnapshot(
				(snapshot) => {
					let users = [];
					snapshot.forEach((doc) => {
						users.push({ ...doc.data(), id: doc.id });
					});
					console.log(users);
					dispatch({ type: "SET_ALL_USERS", payload: users });
				},
				(error) => {}
			);
	};
};