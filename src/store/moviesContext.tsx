import { createContext, PropsWithChildren, useState } from "react";
import axios from "axios";
import Movie from "../models/movie";

type MoviesContextObject = {
  movies: Movie[];
  singleMovie: {};
};

export const MoviesContext = createContext<MoviesContextObject | null>({
  movies: [],
  singleMovie: {},
//   searchMovies: () => {},
//   getSingleMovie: () => {},
//   clearSingleMovie: () => {},
});

const MoviesContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [moviesState, setMoviesState] = useState<Movie[]>([]);

  const searchMovies = async (searchTerm: string) => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    console.log(data);
    setMoviesState(data);
  };

  const clearSingleMovie = () => {};

  const getSingleMovie = async (id: string) => {
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    console.log(data);
    setMoviesState(data);
  };

  const contextValue: MoviesContextObject | any = {
    // any yazdım ççünkü fonksiyonlar yüzünden hata alıyordum
    movies: moviesState,
    singleMovie: moviesState,
    searchMovies: () => searchMovies,
    getSingleMovie: () => getSingleMovie,
    clearSingleMovie: () => clearSingleMovie,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
