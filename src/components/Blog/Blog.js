import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "./Blog.css";
import { GiFlowerPot } from "react-icons/gi";

const Blog = () => {
  return (
    <div
      style={{
        backgroundImage: `url('http://html.cwsthemes.com/suntour/pic/parallax-3.jpg')`,
      }}
      className="bg-blog"
    >
      <h1 className="all-title container mt-5 mb-5">
        <span className="fs-6">LATEST NEWS</span> <br />
        OUR BLOG
        <br />
        <hr />
      </h1>

      <Container>
        <Row className='gy-5'>
          <Col xm={12} md={12} lg={6}>
          <Fade left>
            <Card >
              <div className="card blog-frame text-white">
                <div>
                  <div className="details p-2 fs-4">
                    <h6 className="fw-bold">
                    The most popular state for tourism in the U.S. endured record wildfires, drought and flooding just this year. “The rate of change has been so dramatic,” says one local scientist. “If I was the California tourism industry, I’d be really worried.”
                    </h6>
                    <small className="text">
                     22 July 2021
                    </small>
                    <br />
                    <small className="text">
                    Md Hasibul Hasan
                    </small>
                  </div>
                  <div className="book-image">
                    <img className="blog-image-info" src="/image/blog/1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </Card>
            </Fade>
          </Col>
          
          <Col xm={12} md={12} lg={6}>
          <Fade right>
            <Card >
              <div className="card blog-frame text-white">
                <div>
                  <div className="details p-2 fs-4">
                    <h6 className="fw-bold">
                    The most popular state for tourism in the U.S. endured record wildfires, drought and flooding just this year. “The rate of change has been so dramatic,” says one local scientist. “If I was the California tourism industry, I’d be really worried.”
                    </h6>
                    <small className="text">
                     22 July 2021
                    </small>
                    <br />
                    <small className="text">
                    Md Hasibul Hasan
                    </small>
                  </div>
                  <div className="book-image">
                    <img className="blog-image-info" src="/image/blog/2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </Card>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
