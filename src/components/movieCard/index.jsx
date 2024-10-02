import React from "react";
import MovieCardItem from "./movieCardItem";
import { useQueryHandler } from "../../hooks/useQueryHandler";

const MovieCard = () => {
  const { isLoading, isError, data } = useQueryHandler({
    url: "movies",
    pathname: "movies",
  });
  if (isError) {
    <div>Error</div>;
  }
  if (isLoading) {
    <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-5 gap-[20px]">
      {data?.map((item) => (
        <MovieCardItem key={item.id} movies={item} />
      ))}
    </div>
  );
};

export default MovieCard;
