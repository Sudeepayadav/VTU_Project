import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>

      <div>
        <marquee>
          VTU Result 2024 Out - Check Exam Results Here!!!
          <Link to="/result/loginpage"> Click Here... </Link>Best of Luck!!!
        </marquee>
      </div>

      <div>
        <Carousel style={{ borderRadius: "10px", overflow: "hidden" }}>
          <Carousel.Item
            style={{ border: "1px solid black", borderRadius: "10px" }}
          >
            <img
              className="d-block w-100"
              src="images/img2.jpg"
              alt="First slide"
              height="500px"
            />
          </Carousel.Item>

          <Carousel.Item
            style={{ border: "1px solid black", borderRadius: "10px" }}
          >
            <img
              className="d-block w-100"
              src="images/img1.jpg"
              alt="Second slide"
              height="500px"
            />
          </Carousel.Item>

          <Carousel.Item
            style={{ border: "1px solid black", borderRadius: "10px" }}
          >
            <img
              className="d-block w-100"
              src="images/img3.jpg"
              alt="Third slide"
              height="500px"
            />
          </Carousel.Item>

          <Carousel.Item
            style={{ border: "1px solid black", borderRadius: "10px" }}
          >
            <img
              className="d-block w-100"
              src="images/img4.png"
              alt="forth slide"
              height="500px"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <br/>
      <Row className="my-5">
        <Col>
          <Link to="/about"> <h3>Vision</h3></Link>
          <p className="p-style">
            To become an outstanding Technological University at the cutting
            edge of Science and Technology that produces world class
            Knowledge-delivery, Research, Extension and Leadership in Technology
            innovation for Industry and Society. To become an outstanding 
            edge of Science and Technology that produces world class
            Knowledge-delivery, Research, Extension and Leadership in Technology
            Extension and Leadership in Technology
            innovation for Industry and Society. <p> Science and Technology that produces world class
            Knowledge-delivery, Research, Extension and Leadership in Technology
            Extension and Leadership in Technology
            innovation for Industry and Society.</p>
          </p>
         
          <Link to="/about" className="btn btn-warning">
            Read More
          </Link>
        </Col>

        <Col>
        <Link to="/about"> <h3>Mission</h3></Link>
          <p className="p-style">
            Mission To plan the development of technical education, to establish
            value-based and need-based education and training in engineering and
            technology, with a view to generate qualified and competent
            manpower, responsive to technological and societal needs  Mission To plan the development of technical education, to establish
            value-based and need-based education and training in engineering and
            technology, with a view to generate qualified and competent
            manpower, responsive to technological and societal needs.<p>and need-based education and training in engineering and
            technology, with a view to generate qualified and competent
            manpower, responsive to technological and societal needs</p>
          </p> 
          <Link to="/about" className="btn btn-warning">Read More</Link>
        </Col>

        <Col>
        <Link to="/about"> <h3>Mandate</h3></Link>
          <p className="p-style">
            The Visvesvaraya Technological University has been established by
            the Government of the Karnataka in order to Promote planned and
            sustainable development of technical education consistent with state
            and national policies. *Design need based programs that ensure
            adequate human resource of the right kind   The Visvesvaraya Technological University has been established by
            the Government of the Karnataka in order to Promote planned and
            sustainable development of technical education consistent with state
            and national policies.  
            <p> the Government of the Karnataka in order to Promote planned and
            sustainable development of technical education consistent with state
            and national policies.</p>
          </p>
          <Link to="/about" className="btn btn-warning">Read More</Link>
        </Col>
      </Row>
    </>
  );
};
export default HomeScreen;
