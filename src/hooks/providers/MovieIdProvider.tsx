import React, { useState } from "react";
import Context from "src/hooks/contexts/MovieIdContext";

interface ContextState {
  movieId: number[];
  changeMovieId: (movieId: number[]) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  const [movieId, setMovieId] = useState([0]);

  const changeMovieId = (movieId: number[]) => {
    setMovieId(movieId);
  };

  const contextValue: ContextState = {
    movieId,
    changeMovieId,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
