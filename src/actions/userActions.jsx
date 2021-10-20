export const addUser = (newUser) => {
    //returns the type of action and data to send to the store
    return {
      type: "ADD_USER",
      payload: newUser,
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