import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Booking.css";
import axios from "axios";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation, useParams } from "react-router";
import { Col, Row } from "react-bootstrap";
import { GiFlowerPot } from 'react-icons/gi';

const Booking = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const { user } = useAuth();
  const { register, handleSubmit, setValue } = useForm();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location?.state?.from || "/";
  const { state, country, cost, temperature, description } = book;

  console.log(user.uid);

  useEffect(() => {
    fetch(`https://pure-garden-36521.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  setValue("email", user.email);
  setValue("name", user.displayName);
  setValue("country", book.country);
  setValue("cost", book.cost);
  setValue("status", "pending");
  setValue("image", book.image);

  const onSubmit = (data) => {
    data.userId= user.uid;
    axios
      .post(`https://pure-garden-36521.herokuapp.com/bookings`, data)
      .then((res) => {
        swal("Congratulation!", "Waiting for Confirmation!", "success");
        history.push(redirect_url);
      });
  };
  return (
    <div className="padding-top booking-from-design background"
    >
      <Row className="container gy-5">
        <Col xm={12} md={6} lg={6}>
          <div className="card mx-5 py-5 shadow-lg bg-color text-center">
            <h2 className="text-uppercase text-white">Travel Booking Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className="d-none" {...register("status")} />
              <br />
              <input
                className="rounded p-1 shadow-lg border-0"
                {...register("email")}
              />{" "}
              <br />
              <input
                className="rounded p-1 shadow-lg border-0"
                {...register("name")}
              />{" "}
              <br />
              <input
                className="rounded p-2 shadow-lg border-0"
                {...register("address")}
                placeholder="Address"
                required
              />{" "}
              <br />
              <input
                className="rounded p-1 shadow-lg border-0"
                {...register("country")}
              />
              <br />
              <input
                className="rounded p-1 shadow-lg border-0"
                {...register("cost")}
              />
              <br />
              <input type="date" {...register("date")} required />
              <br />
              <input className="d-none" {...register("image")} />
              <br />
              <input
                className="rounded p-1 shadow-lg border-0"
                type="submit"
                value="Confirm Your Booking"
              />
            </form>
          </div>
        </Col>
        <Col xm={12} md={6} lg={6}>
          <div className="card frame text-white">
            <div>
              <div className="details p-2 fs-4">
                <h6 className="fw-bold">
                  <GiFlowerPot/> {state} ( {country} )
                </h6>
                <small className='text'>
                <GiFlowerPot/> Start Per Night{" "}
                  <span className="fs-4 text-danger"> ${cost}</span>
                </small>
                <br />
                <small  className='text'>
                <GiFlowerPot/> Local Temperature
                  <span className="fs-5 text-success">
                    {" "}
                    {temperature}° / 86°
                  </span>
                </small>
                <p className='text'><GiFlowerPot/> {description}</p>
              </div >
            <div className='book-image'>
            <img className='image-info' src={book.image} alt="" />
            </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Booking;
