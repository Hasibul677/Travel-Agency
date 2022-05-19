import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import './MyBooking.css';
import axios from "axios";
import swal  from 'sweetalert';

const MyBooking = () => {
  const [books, setBooks] = useState([]);
  const { user } = useAuth();
 
  useEffect(() => {
    fetch(`https://pure-garden-36521.herokuapp.com/bookings`)
      .then((res) => res.json())
      .then((data) => {
          const reamingData = data?.filter((book) => book.email === user.email);
          setBooks(reamingData);
      });
  }, []);

  const deleteBooking= (id, uid)=>{
    axios.delete(`https://pure-garden-36521.herokuapp.com/bookings/${id}/${uid}`)
    .then(res=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          const reamingData = books.filter(book=> book._id !== id);
          setBooks(reamingData)
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    })
  }
  return (
    <div className="padding-top padding-bottom">
      <Container>
        <Row className='gy-5'>
          {books.map((book) => (
            <Display key={book._id} book={book} deleteBooking={deleteBooking}></Display>
          ))}
        </Row>
      </Container>
    </div>
  );
};

function Display({ book, deleteBooking }) {
  const {_id, userId, name, country, date, status, image } = book;

  return (
    <Col xm={12} md={6} lg={6}>

        <div className='d-flex main bg-primary text-white'>
        <div>
        <img className='confirm-image' src={image} alt=''/>
        </div>
        <div className='details-info'>
        <Card.Body>
          <Card.Title>{country}</Card.Title>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{date}</Card.Text>
          <Card.Text>{status}</Card.Text>
          <button onClick={()=>deleteBooking(_id, userId)} className='fs-4 px-4 rounded-pill text-danger pb-1'>Cancel</button>
        </Card.Body>
        </div>
        </div>
    </Col>
  );
}

export default MyBooking;
