import React from "react";
import { movies } from "../data";

function Movies() {
  const renderedMovies = movies.map((movie) => (
    <div key={movie.title}>
      Name:{movie.title} <br/>Time: {movie.time} <br/> Genres:
      <ul>
        {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Movies Page</h1>
      {renderedMovies}
    </div>
  );
}

export default Movies;
