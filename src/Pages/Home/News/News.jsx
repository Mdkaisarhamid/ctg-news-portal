import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CardInsights from "../../News/CardInsights/CardInsights";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  console.log("not working");
  const { _id, title, details, image_url, category_id } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {details}</Card.Text>
        <Link
          className="bg-primary py-2 px-4 rounded-2  text-white text-decoration-none"
          to={`/category/${category_id}`}
        >
          <FaArrowLeft />

          <span className="px-2">All News</span>
        </Link>
      </Card.Body>
      <CardInsights></CardInsights>
    </Card>
  );
};

export default News;
