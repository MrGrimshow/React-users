export const addUser = (newUser) => {
    //returns the type of action and data to send to the store
    return {
      type: "ADD_USER",
      payload: newUser,
    };
  };