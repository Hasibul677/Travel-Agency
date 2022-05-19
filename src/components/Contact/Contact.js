import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGhhc2lidWwiLCJhIjoiY2t1emtvaWtvMjhnZDJ1bzB5aG01ZTkxNCJ9.2gXrkFsUbaTHlZKE821IMg";

const Contact = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-92.304980, 40.994910],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url('https://preview.colorlib.com/theme/vacation/images/xbg_1.jpg.pagespeed.ic.SR1pWxjxwy.webp')`,
      }}
      className="padding-bottom contact-bg"
    >
      <h1 className="text-white fw-bold display-2 text-center contact-padding-top padding-bottom">
        Contact Us
      </h1>

      <Container>
        <Row className='gy-3 pt-5'>
          <Col xm={12} md={12} lg={12}>
            <Card className="maps">
              <div id="map"></div>
            </Card>
          </Col>

          <Col xm={12} md={6} lg={8}>
          <div className="card mx-5 py-5 shadow-lg text-center">
            <form>
              <input placeholder='Email' className='rounded py-1 px-2 w-75 mb-2' type="text" />
              <input placeholder='Subject' className='rounded py-1 px-2 w-75' type="text" />
              <textarea placeholder='Message' className='rounded px-2 w-75 pb-5' type="text" /><br />
              <button className='rounded px-2 w-75 btn btn-outline-primary'>SEND MESSAGE</button>
            </form>
          </div>
        </Col>

          <Col xm={12} md={6} lg={4}>
          <Card>
          <Row>
            <Col xm={12} md={12} lg={12}>
             <div className='d-flex align-items-center px-3 py-4'>
             <i class="fa-3x text-danger me-5 fas fa-map-marker-alt"></i>
               <div>
               <strong>Devil Travel Agency <br /> Dhaka Bangladesh</strong>
               </div>
             </div>

            </Col>
            <Col xm={12} md={12} lg={12}>
             <div className='d-flex align-items-center px-3 py-4'><i class="fa-3x me-5 text-danger fas fa-mobile-alt"></i> <div> <strong>+880 1799999999 <br />+88 963 852 7412</strong></div></div>
            </Col>
            <Col xm={12} md={12} lg={12}>
             <div className='d-flex align-items-center px-3 py-4'><i class="fa-3x me-5 text-danger fas fa-envelope"></i><div><strong>hhasibul677@gamil.com <br /> teamrejected677@gamil.com</strong></div></div>
            </Col>
            <Col xm={12} md={12} lg={12}>
             <div className=''><hr /><hr /></div>
            </Col>
          </Row>
           </Card>
           </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
