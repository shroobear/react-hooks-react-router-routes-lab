import React from "react";
import { actors } from "../data";

function Actors() {
  const renderedActors = actors.map((actor) => (
    <div key={actor.name}>
      Name: {actor.name} <br/> Movies:
      <ul>
        {actor.movies.map((movie) => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ));
  return (
  <div>
    <h1>Actors Page</h1>
    {renderedActors}
  </div>);
}

export default Actors;
