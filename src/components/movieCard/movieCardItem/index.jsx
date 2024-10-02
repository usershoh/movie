import React from "react";
import { Link } from "react-router-dom";

const MovieCardItem = ({ movies }) => {
  const { id, title, img, rate } = movies;
  return (
    <div>
      <Link to={`/cards/${id}`} key={id}>
        <img src={img} alt="" />
      </Link>
      <div>
        <h2>{title.slice(0, 25)}</h2>
        <p>{rate}</p>
      </div>
    </div>
  );
};

export default MovieCardItem;
