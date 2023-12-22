import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const { user, Logout } = useContext(AuthContext);

  const handleLogOut = () => {
    Logout()
      .then(() => {})
      .catch((err) => {
        const errMsg = err.message;
        console.log(errMsg);
      });

    console.log("it si working");
  };
  return (
    <Container className="py-4">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className="d-flex justify-content-center align-items-center">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="mx-auto d-flex justify-item-center  align-items-center gap-4 ">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
              <Link to="/" className="text-decoration-none">
                About
              </Link>
              <Link to="/" className="text-decoration-none">
                Career
              </Link>
            </Nav>
            {user ? (
              <Nav className="d-flex gap-4 justify-content-center align-items-center">
                <CgProfile className="fs-3" />
                <Button onClick={handleLogOut} variant="secondary">
                  Logout
                </Button>{" "}
              </Nav>
            ) : (
              <div className="d-flex gap-4">
                <Link
                  className="text-decoration-none text-secondary"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-decoration-none text-secondary"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
