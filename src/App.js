import './App.css';
import React, { useState } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";

function App() {
  //users state array
  const [users, setUsers] = useState([]);

  //function to add a new user
  function addUser(user) {
    //makes a copy of the current users state
    //and add a new user.
    setUsers([...users, user]);
  }

  //function to edit user
  function editUser(newDetails, userId) {
    //maps through the users array and updates
    //the user with the same user id
    const u = users.map((user) => {
      if (userId === user.id) {
        return newDetails;
      } else {
        return user;
      }
    });

    //updates the users state to contain the edited user
    setUsers(u);
  }

  //funtion to delete a user
  function deleteUser(userId) {
    //loops through the users state and removes the user with the same id
    const filteredUsers = users.filter((user) => {
      return userId !== user.id;
    });

    //sets the users state to the filtered users array
    setUsers(filteredUsers);
  }

  return (
    <div>
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;