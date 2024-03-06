import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import TableData from "./TableData";
import axios from "axios";

const ResultPage = () => {
  const [studentData, setStudentData] = useState([]);

  const value = useParams();
  console.log("value", value);

  useEffect(() => {
    axios.get("http://localhost:3001/studentInfo")
    .then((res) => {
      res.data.map((d) => {
        if (d.registerId === value.id) {
          setStudentData(d);
        }
      })
    })})
  //   .catch((error)=>console.log("err",error))
  // },[]);

  console.log('data',studentData)

  return (
    <>
      <Link
        to="/result/loginpage"
        className="btn btn-dark"
        style={{ marginTop: "1rem" }}
      >
        Go Back
      </Link>

      <Row className="justify-content-center  my-5">
        <Col sm={12} md={6}>
          <center><h4>Visvesvaraya Technological University, belgaum</h4>
          <h6 >
            VII - Semester B.E Examination Result Nov-Dec-2024
          </h6></center>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Form.Group>
            <Form.Label>Student Name :</Form.Label>
            <Form.Label style={{ marginLeft: "2.5rem" }}>sudeep</Form.Label>
            <br />
            <Form.Label>Father Name :</Form.Label>
            <Form.Label style={{ marginLeft: "3rem" }}>mani</Form.Label>
            <br />
            <Form.Label>college Name :</Form.Label>
            <Form.Label style={{ marginLeft: "2.5rem" }}>smv</Form.Label>
          </Form.Group>
        </Col>

        <Col sm={12} md={6}>
          <Form.Group>
            <Form.Label style={{ float: "right" }}>
              Register No :{"RegisterId"}
            </Form.Label>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <TableData />
      </Row>
      <a  className="btn btn-success" href="ResultPage.js" download style={{marginLeft:"90%"}}>Download</a>
    
    </>
  );
};
export default ResultPage;
