import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Col, ListGroup } from "react-bootstrap";
import { addUser } from "../actions/userActions";
import { connect } from "react-redux";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] =useState("");
  


  function handleSubmit(e) {
    //prevents the page from refreshing when form is submitted
    e.preventDefault();

    if (email && name) {
      let newUser = {
        name: name,
        email: email,
        gen: gen,
        //adds a unique id to the new user
        id: uuid(),
      };

      props.addNewUser(newUser);

      setName("");
      setEmail("");
      setGen("");
    }
  }

  return (
    <Col md="4" style={{ marginBottom: "1rem" }}>
    <form onSubmit={(e) => handleSubmit(e)}>
    <label>Fullname</label>
      <input
        type="text"
        name="fullname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <br></br>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <br/>
      <label>Gen</label>
      <input
        type="number"
        name="Gen"
        value={gen}
        onChange={(e) => setGen(e.target.value)} 
      />
      
      {/* <label>Female</label> 
    <input
        type="radio"
        name="female"
        value={female}
        onChange={(e) => setFemale(e.target.value)} 
      />  
       
       <label>Other</label>
    <input
        type="radio"
        name="others"
        value={others}
        onChange={(e) => setOthers(e.target.value)} 
      /> */}
     
      
      <input type="submit" />
    </form>
    </Col>
  );
}

const mapDispatchToProps = {
  addNewUser: addUser,
};

export default connect(null, mapDispatchToProps)(UserForm);