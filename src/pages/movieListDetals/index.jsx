import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieListCard = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/movies/${id}`)
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className="flex gap-[50px] px-[10%]">
      <img className="w-[600px]" src={data.img} alt="" />
      <div>
        <h1 className="text-[48px]">{data.title}</h1>
        <p className="text-[22px]">{data.description}</p>
        <p className="pt-[10px]">рейтинг: {data.rate}</p>
      </div>
    </div>
  );
};

export default MovieListCard;
