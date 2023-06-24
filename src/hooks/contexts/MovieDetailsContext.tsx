import { createContext } from "react";
import { movieDetailsInitials } from "src/data/constants";
import { movieDetailsType } from "src/data/types";

const MovieDetailsContext = createContext({
  movieDetails: movieDetailsInitials,
  changeMovieDetails: (movieDetails: movieDetailsType) => {},
});

export default MovieDetailsContext;
