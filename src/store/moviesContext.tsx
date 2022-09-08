import { createContext, PropsWithChildren} from "react";
import {id,name,summary,rating,image,status} from "../models/movie";

type MoviesContextObject = {
  movies: [];
  singleMovie: {};
};

const initialState = {
  movies: [],
  singleMovie: {},
};

export const MoviesContext = createContext<MoviesContextObject | null>(null);

const MoviesContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  
  const contextValue: MoviesContextObject | any = {
    // any yazdım ççünkü fonksiyonlar yüzünden hata alıyordum
    movies: [],
    singleMovie: [],
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
