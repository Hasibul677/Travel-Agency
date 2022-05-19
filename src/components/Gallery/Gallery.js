import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Gallery.css';
import Fade from "react-reveal/Fade";

const Gallery = () => {
    return (
        <div>
            <h1 className="all-title container mt-5 mb-5"><span className='fs-6'>HAPPY MEMORIES</span> <br />PHOTO GALLERY <br /><hr /></h1>

            <Container>
                <Row className='g-3'>
                    <Col xm={12} md={6} lg={6}><Fade left> <img className='img-fluid' src="/image/gallery/1.jpg" alt="" /></Fade></Col>
                    <Col xm={12} md={6} lg={3}><Fade bottom><img className='img-fluid' src="/image/gallery/2.jpg" alt="" /></Fade></Col>
                    <Col xm={12} md={6} lg={3}><Fade top><img className='img-fluid' src="/image/gallery/3.jpg" alt="" /></Fade></Col>
                    <Col xm={12} md={6} lg={3}><Fade right><img className='img-fluid' src="/image/gallery/4.jpg" alt="" /></Fade></Col>
                    <Col xm={12} md={6} lg={3}><Fade right><img className='img-fluid' src="/image/gallery/5.jpg" alt="" /></Fade></Col>
                    <Col xm={12} md={6} lg={3}><Fade top><img className='img-fluid' src="/image/gallery/6.jpg" alt="" /></Fade></Col>
                    <Col xm={12} md={6} lg={3}><Fade bottom><img className='img-fluid' src="/image/gallery/7.jpg" alt="" /></Fade></Col>
                    <Col xm={12} md={6} lg={3}><Fade left><img className='img-fluid' src="/image/gallery/8.jpg" alt="" /></Fade></Col>
                    <Col xm={12} md={6} lg={3}><Fade left><img className='img-fluid' src="/image/gallery/3.jpg" alt="" /></Fade></Col>
                    <Col xm={12} md={6} lg={6}><Fade top><img className='img-fluid' src="/image/gallery/10.jpg" alt="" /></Fade></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Gallery;