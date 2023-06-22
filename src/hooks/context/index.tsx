import { createContext } from "react";

const Context = createContext({
  movieId: [0],
  changeMoveId: (movieId: number[]) => {},
});

export default Context;
