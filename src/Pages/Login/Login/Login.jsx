import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const Login = () => {
  const { Login, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    Login(email, password)
      .then((res) => {
        const loggedUser = res.user;
        setLoading(false);
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const errmsg = err.message;
        console.log(errmsg);
      });
  };
  return (
    <Container className="w-25 mx-auto border-0 ">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter you email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </Form.Group>

        <Form.Text>
          Don't have an account. Please <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="bg-primary"></Form.Text>
        <Form.Text className="bg-warning mb-4"></Form.Text>
        <div className="d-flex justify-content-center">
          <Button
            as="input"
            type="submit"
            value="Login"
            className="text-center mt-4"
          />
        </div>
      </Form>
    </Container>
  );
};

export default Login;
