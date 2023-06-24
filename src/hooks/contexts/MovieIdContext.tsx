import { createContext } from "react";

const MovieIdContext = createContext({
  movieId: [0],
  changeMovieId: (movieId: number[]) => {},
});

export default MovieIdContext;
