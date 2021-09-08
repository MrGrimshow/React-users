import logo from './logo.svg';
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

  return (
    <div className="App">
      <UserForm addUser={addUser} />
      <UserList data={users} />
    </div>
  );
  
}

export default App;
