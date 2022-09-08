import React from "react";
import "../pages.css";
import MoviesContext,{movie} from "../../store/moviesContext";

import CardItem from "../../components/CardItem/CardItem";

// Interface
export interface IMoviesListProps {}

const MoviesList: React.FC<IMoviesListProps> = (props) => {
  
return (
    <MoviesContext.Provider value={movie}>
      <h1>Movies List Page</h1>
      <div>
        <CardItem></CardItem>
      </div>
    </MoviesContext.Provider>
  );
};

export default MoviesList;
