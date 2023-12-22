import React from "react";
import { useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2>This is news details {news.title}</h2>
    </div>
  );
};

export default NewsDetails;
