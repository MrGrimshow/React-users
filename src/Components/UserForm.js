import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [male, setMale] =useState("");
  const [female, setFemale] =useState("");
  const [others, setOthers] =useState("");


  function handleSubmit(e) {
    //prevents the page from refreshing when form is submitted
    e.preventDefault();

    if (email && name) {
      let newUser = {
        name: name,
        email: email,
        //adds a unique id to the new user
        id: uuid(),
      };

      props.addUser(newUser);

      setName("");
      setEmail("");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="fullname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Fullname</label>

      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Email</label>
      <br/>

      <input
        type="radio"
        name="male"
        value={male}
        onChange={(e) => setMale(e.target.value)} 
      />
      <label>Male</label>

    <input
        type="radio"
        name="female"
        value={female}
        onChange={(e) => setFemale(e.target.value)} 
      />  
      <label>Female</label>  

    <input
        type="radio"
        name="others"
        value={others}
        onChange={(e) => setOthers(e.target.value)} 
      />
      <label>Female</label>
      
      <input type="submit" />
    </form>
  );
}

export default UserForm;