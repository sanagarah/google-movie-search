import React, { useState } from "react";
import { movieDetailsInitials } from "src/data/constants";
import { movieDetailsType } from "src/data/types";
import Context from "src/hooks/contexts/MovieDetailsContext";

interface ContextState {
  movieDetails: any;
  changeMovieDetails: (movieDetails: movieDetailsType) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  const [movieDetails, setMovieDetails] = useState(movieDetailsInitials);

  const changeMovieDetails = (movieDetails: any) => {
    setMovieDetails(movieDetails);
  };

  const contextValue: ContextState = {
    movieDetails,
    changeMovieDetails,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
