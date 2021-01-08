import React, { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "£90",
      id: 96,
    },
    {
      name: "Harry Potter",
      price: "£90",
      id: 96,
    },
    {
      name: "Harry Potter",
      price: "£90",
      id: 96,
    },
  ]);
  return (
    <div>
      {movies.map((movie) => (
        <li>{movie.name}</li>
      ))}
    </div>
  );
};

export default MovieList;

//rafce
