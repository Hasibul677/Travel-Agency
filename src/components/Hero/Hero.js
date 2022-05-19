import React from "react";
import "./Hero.css";
import { Carousel } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Rotate from 'react-reveal/Rotate';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://media.istockphoto.com/photos/travel-concept-on-blue-background-picture-id1251587172?b=1&k=20&m=1251587172&s=170667a&w=0&h=R94X5r6TBtC6C_Hbv0gkUNfeytJ7WaT_-rvSXhubmkQ=')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment:"fixed"
      }}
    >
      <Carousel>
        <Carousel.Item>
          <Zoom>
          <div>
              <img
                className="image position-relative"
                src="/image/hero/2.jpg"
                alt="First slide"
              />
              <Rotate bottom left>
              <h2 className="title fw-bold">WELCOME TO <br /> <span className='display-1 fw-bold ms-3'>HONOLULU</span><p className='ms-5'>Per Night Only $200</p></h2>
              
              </Rotate>
            </div>
          </Zoom>
        </Carousel.Item>
        <Carousel.Item>
          <Zoom>
          <div>
              <img
                className="image position-relative"
                src="/image/hero/1.jpg"
                alt="First slide"
              />
              <Rotate bottom left>
              <h2 className="title fw-bold">WELCOME TO <br /> <span className='display-1 fw-bold ms-3'>ISTANBUL</span><p className='ms-5'>Per Night Only $250</p></h2>
              </Rotate>
            </div>
          </Zoom>
        </Carousel.Item>
        <Carousel.Item>
          <Zoom>
            <div>
              <img
                className="image position-relative"
                src="/image/hero/3.jpg"
                alt="First slide"
              />
              <Rotate bottom left>
              <h2 className="title fw-bold">WELCOME TO <br /> <span className='display-1 fw-bold ms-3'>DUBAI</span><p className='ms-5'>Per Night Only $180</p></h2>
              </Rotate>
            </div>
          </Zoom>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
