import React, { useReducer, PropsWithChildren, useState } from "react";
import axios from "axios";
import Movie from "../models/movie";
import moviesReducer from "./movies-reducer";
import {
  SEARCH_MOVIES,
  SET_LOADING,
  SET_SINGLE_MOVIE,
  CLEAR_SINGLE_MOVIE,
} from "./types";

type MoviesContextObject = {
  movies: Movie[];
  singleMovie: {};
  loading: boolean;
  searchMovies: (searchTerm:string) => Movie[];
  getSingleMovie: (id:string) => Movie;
  clearSingleMovie: () => void;
};

export const MoviesContext = React.createContext<MoviesContextObject>({
  movies: [],
  singleMovie: {},
  loading: false,
});

const initialState: MoviesContextObject = {
  movies: [],
  singleMovie: {},
  loading: false,
  searchMovies,
  getSingleMovie,
  clearSingleMovie
};

const MoviesContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState); // type bulamadım
  const [moviesState, setMoviesState] = useState<Movie[]>([]);

  const searchMovies = async (searchTerm: string) => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    console.log(data);
    dispatch({
      type: SEARCH_MOVIES,
      payload: data,
    });
    setMoviesState(data);
  };

  const clearSingleMovie = () => {
    dispatch({ type: CLEAR_SINGLE_MOVIE });
  };

  const getSingleMovie = async (id: string) => {
    dispatch({ type: SET_LOADING });
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    console.log(data);
    dispatch({ type: SET_SINGLE_MOVIE, payload: data });
    setMoviesState(data);
  };

  const contextValue: MoviesContextObject = {
    movies: moviesState,
    singleMovie: state.singleMovie,
    loading: state.loading,
    searchMovies,
    getSingleMovie,
    clearSingleMovie,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
