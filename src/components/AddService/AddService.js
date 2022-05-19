import React from "react";
import "./AddService.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import { Container } from "react-bootstrap";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`https://pure-garden-36521.herokuapp.com/services`, data)
      .then((res) => {
        swal("Good job!", "Insert Successfully!", "success");
        reset();
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url('https://media.istockphoto.com/photos/abstract-red-light-leak-burn-on-black-background-picture-id1283558729?b=1&k=20&m=1283558729&s=170667a&w=0&h=OImQW6oAu78tI5hu8KvHWJJhFZJlEnPGHn25bepLvAg=')`,
      }}
      className="background"
    >
      <Container>
        <div className='add-title'>
          <h2 className="padding-top text-uppercase text-white">
            Add Service Form
          </h2>
          <p className="text-white">
            Life is either a daring adventure or nothing at all
          </p>
          <hr />
        </div>
      </Container>
      <div className="from-design">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="rounded border-0"
            required
            {...register("state")}
            placeholder="State"
          />{" "}
          <br />
          <input
            className="rounded border-0"
            required
            {...register("country")}
            placeholder="Country"
          />
          <br />
          <input
            className="rounded border-0"
            required
            type="number"
            {...register("cost")}
            placeholder="Cost"
          />
          <br />
          <input
            className="rounded border-0"
            required
            type="number"
            {...register("temperature")}
            placeholder="Temperature"
          />
          <br />
          <textarea
            required
            {...register("description")}
            placeholder="Description"
          />
          <br />
          <input
            className="rounded border-0"
            required
            {...register("image")}
            placeholder="Image URL"
          />
          <br />
          <input className="rounded border-0" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
