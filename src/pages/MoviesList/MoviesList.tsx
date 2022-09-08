import React, { useState, useEffect } from "react";
import "../pages.css";
import axios from "axios";
import CardItem from "../../components/CardItem/CardItem";

// Interface
export interface IMoviesListProps {}

const MoviesList: React.FC<IMoviesListProps> = (props) => {
  const [moviesState, setMoviesState] = useState<Array<any>>([]);

  useEffect(() => {
    const getMovies = async (searchTerm: string) => {
      const { data } = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchTerm}`
      );
      setMoviesState(data);
      
    };
    console.log("useEffect çalıştı");
    getMovies("man in black");    
    
  }, []);
  console.log(moviesState[0].score);
  

  return (
    <React.Fragment>
      <h1>Movies List Page</h1>
      <div>
        
        {/* <CardItem id={}></CardItem> */}
      </div>
    </React.Fragment>
  );
};

export default MoviesList;
