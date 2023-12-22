import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import card1 from "../../../assets/1.png";
import card2 from "../../../assets/2.png";
import card3 from "../../../assets/3.png";

const CardInsights = () => {
  return (
    <div className="px-4 py-4">
      <Row xs={1} md={2} lg={3} className="g-4 mt-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardInsights;
