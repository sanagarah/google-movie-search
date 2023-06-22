import React, { useState } from "react";
import Context from "src/hooks/context";

interface ContextState {
  movieId: number[];
  changeMoveId: (movieId: number[]) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  const [movieId, setMovieId] = useState([0]);

  const changeMoveId = (movieId: number[]) => {
    setMovieId(movieId);
  };

  const contextValue: ContextState = {
    movieId,
    changeMoveId,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
