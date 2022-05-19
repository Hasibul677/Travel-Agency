import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FcApproval } from 'react-icons/fc';
import axios from 'axios';
import swal  from 'sweetalert';
import useAuth from './../../hooks/useAuth';

const TotalBooking = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(()=>{
        fetch(`https://pure-garden-36521.herokuapp.com/bookings`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
// user delete part
  const deletePerson =(id,uid)=>{
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
          const reamingData = bookings.filter(book=> book._id !== id);
          setBookings(reamingData)
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    })
  }
// user update part
const updateStatus = (id,uid) =>{
  axios.put(`https://pure-garden-36521.herokuapp.com/bookings/${id}/${uid}`)
  const findItem = bookings.find(book=> book._id ===id);
  if(findItem){
    findItem.status='Approve';
    const reamingData = bookings.filter(book=> book._id !==id);
    setBookings([...reamingData, findItem])
  }
}


  return (
    <div className='padding-top padding-bottom'>
      <h1 className='text-center'>All Booking Information</h1>
      <Container>
        <Row>
          <Col xm={3} md={2}>
            <h5>Name</h5>
          </Col>
          <Col xm={3} md={3}>
            <h5>Email</h5>
          </Col>
          <Col xm={3} md={2}>
            <h5>Country</h5>
          </Col>
          <Col xm={3} md={2}>
            <h5>Status</h5>
          </Col>
          <hr />
        </Row>
        <Row className="gy-2">
          {bookings.map((booking) => (
            <DisplayUser booking={booking} key={booking._id} deletePerson={deletePerson} updateStatus={updateStatus}>
              {" "}
            </DisplayUser>
          ))}
        </Row>
      </Container>
    </div>
  );
};
function DisplayUser({ booking, deletePerson, updateStatus }) {
  const {_id, userId, name, email, country, status } = booking;
  console.log(userId);
  return (
    <Col lg={12}>
        <Card className='pt-3 ps-2'>
      <Row>
        <Col xm={6} md={2} lg={2}>
            <div>
              <h6>{name}</h6>
            </div>
        </Col>
        <Col xm={6} md={2} lg={3}>
            <div>
              <h6>{email}</h6>
            </div>
        </Col>
        <Col xm={6} md={2} lg={2}>
            <div>
              <h6>{country}</h6>
            </div>
        </Col>
        <Col xm={6} md={2} lg={2}>
            <div>
              <h6>{status}</h6>
            </div>
        </Col>
        <Col xm={6} md={2} lg={3}>
            <div className='pb-2'>
              <button onClick={()=>updateStatus(_id, userId)} className='btn btn-success'><FcApproval/></button>
              <button onClick={()=>deletePerson(_id, userId)} className='btn btn-danger ms-2'><RiDeleteBin6Fill/></button>
            </div>
        </Col>  
      </Row>
      </Card>
    </Col>
  );
}


export default TotalBooking;