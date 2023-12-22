import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      <h2>
        {id && (
          <h2>
            {id} category is : {categoryNews.length}
          </h2>
        )}
        {categoryNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </h2>
    </div>
  );
};

export default Category;
