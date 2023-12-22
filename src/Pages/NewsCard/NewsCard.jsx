import React from "react";
import moment from "moment/moment";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header>
          <div className="d-flex">
            <Image style={{ height: "40px" }} src={author.img} roundedCircle />
            <div className="fs-6 ms-2 flex-grow-1 align-items-center">
              <p className="mb-0">{author.name}</p>
              <p>
                <small>
                  {moment(author.published_date).format("YYYY-MM-DD")}
                </small>
              </p>
            </div>
            <div>
              <CiBookmark />
              <CiShare2 />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text className="fs-6 fw-light">
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center">
          <div className="fs-6 flex-grow-1 ">
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
            />
            <span>{rating?.number}</span>
          </div>
          <div className="fs-6">
            <FaRegEye /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
