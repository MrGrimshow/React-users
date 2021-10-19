

const initialState = {
    users: [
      { name: "herbert", email: "wtehqj@gmail.com", gen: 3 },
      { name: "vida", email: "wtehqooooj@gmail.com", gen: 17 },
    ],
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        return { ...state, users: [...state.users, action.payload] };
  
      default:
        return state;
    }
  };
  
  
  export default usersReducer;