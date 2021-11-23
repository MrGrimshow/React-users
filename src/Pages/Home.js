import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "../Components/UserForm";
import { Container, Row, Col } from "react-bootstrap";
import UserList from "../Components/UserList";
import { signOut } from "../actions/authActions";
import { connect } from "react-redux";

function Home(props) {
  return (
      <div>
    <Container fluid style={{ marginTop: "5 rem" }}>
      <Row>
        <button onClick={() => props.signOut()}>Sign out</button>
        <Col md="5">
          <UserForm />
        </Col>

        <Col md="5 ">
          <UserList />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

const mapDispatchToProps = {
  signOut,
};

export default connect(null, mapDispatchToProps)(Home);