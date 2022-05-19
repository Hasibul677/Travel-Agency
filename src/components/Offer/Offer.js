import React from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import "./Offer.css";
import { AiOutlineSend } from "react-icons/ai";

const Offer = () => {
  return (
    <div className="bg-offer pt-4">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div>
              <h1>
                <span className="text">SUBSCRIBE TODAY</span>
                <br /> GET LATEST OFFERS
              </h1>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="mt-5">
              <InputGroup className="mb-3">
                <FormControl placeholder="Enter Your Email" />
                <button className="btn bg-white" id="button-addon2">
                  <AiOutlineSend />
                </button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Offer;
