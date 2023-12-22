/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, setLoading } = useContext(AuthContext);
  const [accepted, setAccepted] = useState("");
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, email, password, photo);
    createUser(email, password)
      .then((res) => {
        const reguser = res.user;
        console.log(reguser);
        setLoading(false);
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        const errMsg = err.message;
        console.log(errMsg);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <Container className="w-25 mx-auto border-0 ">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter you email"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter your photo url"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Text className="bg-primary"></Form.Text>
        <Form.Text className="bg-warning mb-4"></Form.Text>
        <div className="d-flex justify-content-start gap-2 align-items-center my-2">
          <Form.Check onClick={handleAccepted} name="ckBox" type="checkbox" />
          <span>
            Accept <Link to="/terms">terms and condition</Link>
          </span>{" "}
        </div>
        <div className="d-flex justify-content-center">
          <Button
            as="input"
            disabled={!accepted}
            type="submit"
            value="Register"
          />
        </div>
        <div className="mt-4 text-end">
          <Form.Text>
            Already have an account. Please <Link to="/login">Login</Link>
          </Form.Text>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
