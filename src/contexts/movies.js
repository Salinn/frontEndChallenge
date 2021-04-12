import React, { createContext, useReducer, useContext } from "react";
import { reducer, types, initialState } from "../reducers/moviesReducer";

const MoviesContext = createContext(null);

const MoviesProvider = (props) => {
  const { children, movies } = props;
  const moviesInitialState = { ...initialState, allMovies: movies }
  const [moviesData, moviesDispatch] = useReducer(reducer, moviesInitialState);

  const values = {
    moviesData,
    moviesDispatch,
  };

  return <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>;
};

const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export { useMoviesContext, MoviesProvider, types };
