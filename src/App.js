import './App.css';
import React, { useState, useEffect } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {connect} from "react-redux"
import { getAllUsers} from "./actions/userActions"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Home from './Pages/Home';
import {BrowserRouter, Route} from "react-router-dom"
import ProtectedRoute from './Components/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
      <ProtectedRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}

// function App(props) {
  
//   //users state array
//   const [users, setUsers] = useState([]);
//   useEffect(()=>{
//     props.getAllUsers();
//   },[]);

//   //function to add a new user
//   function addUser(user) {
//     //makes a copy of the current users state
//     //and add a new user.
//     setUsers([...users, user]);
//   }

//   //function to edit user
//   function editUser(newDetails, userId) {
//     //maps through the users array and updates
//     //the user with the same user id
//     const u = users.map((user) => {
//       if (userId === user.id) {
//         return newDetails;
//       } else {
//         return user;
//       }
//     });

//     //updates the users state to contain the edited user
//     setUsers(u);
//   }

//   //funtion to delete a user
//   function deleteUser(userId) {
//     //loops through the users state and removes the user with the same id
//     const filteredUsers = users.filter((user) => {
//       return userId !== user.id;
//     });

//     //sets the users state to the filtered users array
//     setUsers(filteredUsers);
//   }

//   return (
//     <Container fluid style={{ marginTop: "5 rem" }}>
//       <Row>
//         <Col md="5">
//           <UserForm />
//         </Col>

//         <Col md="5 ">
//           <UserList deleteUser={deleteUser} editUser={editUser} />
//         </Col>
//       </Row>
//     </Container>
//   );
// }
const mapDispatchToProps = {
	getAllUsers
};

export default connect(null, mapDispatchToProps)(App);