import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Travel = () => {
  return (
    <div className="padding-top padding-bottom">

      <Container>
        <Row>
        <Col xm={12} md={12}>
          <marquee behavior="alternate" direction="right" scrollamount="5">
            <img
              className="img-fluid"
              src="https://preview.colorlib.com/theme/tralive/assets/img/hero/xcar.png.pagespeed.ic.RMwqCTktUn.webp"
              alt=""
            />
          </marquee>
        </Col>
          <Col xm={12} md={12} lg={6}>
            <img className="img-fluid" src="/image/about/1.webp" alt="" />
          </Col>
          <Col xm={12} md={12} lg={6}>
            <div className="mt-5">
              <h1>Make Your Tour Memorable and Safe With Us</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarks grove right at the coast of the
                Semantics, a large language ocean.
              </p>
            </div>
          </Col>
          <Col xm={12} md={12} lg={6}>
            <div className="mt-5">
              <h1>It's time to start your adventure</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth. Far far
                away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts. Separated they live
                in Bookmarksgrove right at the coast of the Semantics, a large
                language ocean. A small river named Duden flows by their place
                and supplies it with the necessary regelialia.
              </p>
            </div>
          </Col>
          <Col xm={12} md={12} lg={6}>
            <img className="img-fluid" src="/image/about/2.webp" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Travel;
