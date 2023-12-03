import React from "react";
import { Button, CardImgOverlay, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../Q-Zone/QZone";
import bg from "../../../assets/bg.png";
const RightNav = () => {
  return (
    <div>
      <h2>Login with</h2>
      <Button variant="outline-primary">
        <FaGoogle />
        <span> </span>Login with google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub />
        <span> </span>Login with github
      </Button>

      <div>
        <h4>Find us on </h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaGithub /> Github
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>

      <div>
        <img src={bg} alt="" className="relative" />
        <div className="absolute">
          <h3>Create an Amazing Newspaper</h3>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
