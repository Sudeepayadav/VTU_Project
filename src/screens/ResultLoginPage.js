import React, { useState } from "react";
import { Link,useNavigate, useParams} from "react-router-dom";
import { Button, Row, Col, Form, Alert } from "react-bootstrap";
import axios from "axios";

const ResultLoginPage = () => {
  const [registerInput, setRegisterInput] = useState("");
  const [error, setError] = useState("");

  const navigate= useNavigate();

    const {value}= useParams()

  const submitHandler = (e) => {
    e.preventDefault();
    if (registerInput === " ") {
      setError("Please Enter Register ID");
    } else {
      axios
        .get("http://localhost:3001/studentInfo")
        .then((response) => {
          console.log("res", response.data);
          response.data.map((item) => {
            if (item.registerId === registerInput) {
              navigate(`/resultpage/${registerInput}`);
            } else {
              setError("Invalid Register No");
            }
          });
        })
        .catch((err) => console.log("err", err));
    }
  };
  const changeHandler = (e) => {
    setRegisterInput(e.target.value);
    setError("");
  };

  return (
    <>
      <Link to="/" className="btn btn-dark" style={{ marginTop: "1rem" }}>
        Go Back
      </Link>

      <Row className="text-center">
        <Col>
          <h3>Check Your Results Here...</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col></Col>
        <Col style={{ marginLeft: "-22rem" }}>
          <Form onSubmit={submitHandler}>
            <Form.Label>Enter Your Register No:</Form.Label>
            <br />
            <Form.Control
              type="text"
              placeholder="Enter Your Register No"
              style={{ width: "60%", padding: "10px" }}
              value={registerInput}
              onChange={changeHandler}
            />
            <br />
            <Button type="sumbit" style={{ marginTop: "1rem" }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        {error ? <Alert variant="danger">{error}</Alert> : ""}
      </Row>
    </>
  );
};
export default ResultLoginPage;
