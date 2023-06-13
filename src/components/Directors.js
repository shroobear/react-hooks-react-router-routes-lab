import React from "react";
import { directors } from "../data";

function Directors() {
  const renderedDirectors = directors.map((director) => (
    <div key={director.name}>
      Name: {director.name} <br/> Movies:
      <ul>
        {director.movies.map((movie) => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ));
  return (
  <div>
    <h1>Directors Page</h1>
    {renderedDirectors}
  </div>
  );
}

export default Directors;
