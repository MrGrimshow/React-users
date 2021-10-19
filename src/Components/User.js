import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";


function User(props) {
  const user = props.user;

  //state to handle modal
  const [showModal, setShowModal] = useState(false);

  //function to toggle modal
  function toggleModal() {
    //sets the showModal state the opposite of what
    //it currently is
    setShowModal(!showModal);
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h4>{user.gen}</h4>
      <Button variant="primary" onClick={() => toggleModal()}>
        Edit
      </Button>
      <Button variant="danger" onClick={() => props.deleteUser(user.id)}>
        Delete
      </Button>

      {/*Modal to edit user*/}
      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*Component to edit user*/}
          <EditUserForm
            user={user}
            editUser={props.editUser}
            toggleModal={toggleModal}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggleModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default User;