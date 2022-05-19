import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://pure-garden-36521.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-5">
      <Fade left>
        <h1 className="all-title container mb-5">
          <span className="fs-6">SPECIAL OFFERS</span> <br />
          POPULAR DESTINATIONS <hr />
        </h1>
      </Fade>
      <Container>
        <Row>
          {services.map((service) => (
            <DisplayService
              key={service._id}
              service={service}
            ></DisplayService>
          ))}
        </Row>
      </Container>
    </div>
  );
};

function DisplayService({ service }) {
  const { _id, state, country, cost, description, image, temperature } =
    service;
  return (
    <Col xm={12} md={6} lg={4}>
      <Fade left>
        <Card className="overflow-hidden">
          <Card.Img className="service-image" src={image} />
          <Card.Body>
            <h6>
              {state} ( {country} )
            </h6>
            <small className="fw-bold">
              START PER NIGHT <span className="fs-4 text-danger">${cost}</span>
            </small>
            <br />
            <small className="fw-bold">
              LOCAL TEMPERATURE
              <span className="fs-5 text-success"> {temperature}° / 86°</span>
            </small>
            <Card.Text>{description}</Card.Text>
            <Link to={`/booking/${_id}`}>
              <button className="btn btn-outline-danger w-100">Book Now</button>
            </Link>
          </Card.Body>
        </Card>
      </Fade>
    </Col>
  );
}

export default Service;
