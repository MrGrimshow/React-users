import React, { useState } from "react";
import User from "./User";
import { Modal, Button } from "react-bootstrap";

function UserList(props) {
  return (
    <div>
      {props.users.map((user) => {
        //renders the User component for each user in the users array
        return (
          <User
            user={user}
            key={user.id}
            deleteUser={props.deleteUser}
            editUser={props.editUser}
          />
        );
      })}
    </div>
  );
}

export default UserList;