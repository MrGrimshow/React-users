export const addUser = (newUser) => {
    //returns the type of action and data to send to the store
    return (dispatch, state, { getFirestore }) => {
      getFirestore()
      .collection("users")
      .add(newUser)
      .then(
        () => {},
        () => {}
      )
      // type: "ADD_USER",
      // payload: newUser,
    };
  };

  export const deleteUser = (userId) => {
    return {
      type: "DELETE_USER",
      payload: userId,
    };
  };
  
  export const editUser = (userId, updatedUser) => {
    return {
      type: "EDIT_USER",
      payload: {userId, updatedUser},
    };
  };

  export const getAllUsers = () => {
    return (dispatch, state, { getFirestore }) => {
      getFirestore()
        .collection("users")
        .onSnapshot(
          (snapshot) => {
            let users = [];
            snapshot.forEach((doc) => {
              users.push(doc.data());
            });
            console.log(users);
            dispatch({ type: "SET_ALL_USERS", payload: users });
          },
          (error) => {}
        );
    };
  };