

const initialState = {
    users: [
      // { name: "herbert", email: "wtehqj@gmail.com", gen: 3 },
      // { name: "vida", email: "wtehqooooj@gmail.com", gen: 17 },
    ],
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        return { ...state.users, users: [...state.users, action.payload] };
  
      case "DELETE_USER":
        const filteredUsers = state.users.filter(
          (user) => user.id !== action.payload
        );
        return { ...state, users: filteredUsers };
  
      case "EDIT_USER":
        const updatedUsers = state.users.map((user) => {
          if (user.id === action.payload.userId) {
            return action.payload.updatedUser;
          }
          return user;
        });
  
        return { ...state, users: updatedUsers };
  
      default:
        return state;
    }
  };
    
  
  
  export default usersReducer;