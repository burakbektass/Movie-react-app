import React,{useContext} from "react";
import MoviesContext,{movie} from "../../store/moviesContext";

import CardItem from "../../components/CardItem/CardItem";

// Interface
export interface IMoviesListProps {}

const MoviesList: React.FC<IMoviesListProps> = (props) => {
  const movieCtx = useContext(MoviesContext);
  console.log(movie.id,"movie List item")
  
return (
    <MoviesContext.Provider value={movie}>
      <h1>Movies List Page</h1>
      <div>
        <CardItem movie_id ={movie.id}></CardItem>
      </div>
    </MoviesContext.Provider>
  );
};

export default MoviesList;
