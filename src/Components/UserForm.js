import React, { useState } from "react";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [male, setMale] =useState("");
  const [female, setFemale] =useState("");
  const [others, setOthers] =useState("");


  function handleSubmit(e) {
    //prevents the page from refreshing when form is submitted
    e.preventDefault();

    //object with the new user
    let user = {
      name: name,
      email: email,
      male: male,
      female: female,
      others: others
    };

    //calls the addUser function in App.js
    props.addUser(user);

    //sets name, email state to empty strings
    setName("");
    setEmail("");
    setMale("");
    setFemale("");
    setOthers("");
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