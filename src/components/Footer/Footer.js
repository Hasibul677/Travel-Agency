import React from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import "./Footer.css";
import { AiOutlineSend } from "react-icons/ai";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-dark footer-color py-5">
      <Container>
        <Row>
          <Col xm={12} md={6} lg={3}>
            <div>
              <img src="/image/logo1.png" alt="" />
            </div>
            <p className="mt-4 f-text">
              Nam liber tempor cum soluta nobis option congue nihil imperdiet
              doming id quod mazim. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna.
            </p>
          </Col>
          <Col xm={12} md={6} lg={3}>
            <div className="f-m">
              <h3 className="mb-4">Travel Specialists</h3>
              <p>First Class Flight</p>
              <hr />
              <p>Accessible Travel</p>
              <hr />
              <p>Amazing Cruises</p>
              <hr />
              <button className="fs-5 rounded btn-secondary ms-2">
                <TiSocialFacebook />
              </button>
              <button className="fs-5 rounded btn-secondary ms-2">
                <TiSocialTwitter />
              </button>
              <button className="fs-5 rounded btn-secondary ms-2">
                <TiSocialYoutube />
              </button>
              <button className="fs-5 rounded btn-secondary ms-2">
                <TiSocialInstagram />
              </button>
            </div>
          </Col>
          <Col xm={12} md={6} lg={3}>
            <div className="f-m">
              <h3 className="mb-4">Our Twitter</h3>
              <p className='f-text'>
                @ Travel is fatal to prejudice, bigotry, and narrow mindedness,
                and many of our people.
              </p>
              <hr />
              <p className='f-text'>
                @ Travel is fatal to prejudice, bigotry, and narrow mindedness,
                and many of our people.
              </p>
            </div>
          </Col>
          <Col xm={12} md={6} lg={3}>
            <div className="f-m">
              <h3 className="mb-4">Newsletter</h3>
              <p className='f-text'>Inspiration, ideas, news and your feedback.</p>
              <p>
              <InputGroup className="mb-3">
                <FormControl placeholder="Enter Your Email" />
                <button className="btn bg-white" id="button-addon2">
                  <AiOutlineSend />
                </button>
              </InputGroup>
              </p>
              <h4 className='number'>889763575</h4>
              travelagency@gmail.com
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <div className='mt-5 text-center'>
          <span>Copyright © 2021 Travel Agency || Develop by Md Hasibul Hasan </span>
      </div>
    </div>
  );
};

export default Footer;
