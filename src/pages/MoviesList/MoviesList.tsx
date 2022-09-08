import React from "react";
import "../pages.css";

import CardItem from "../../components/CardItem/CardItem";

// Interface
export interface IMoviesListProps {}

const MoviesList: React.FC<IMoviesListProps> = (props) => {
  
return (
    <React.Fragment>
      <h1>Movies List Page</h1>
      <div>
        <CardItem></CardItem>
      </div>
    </React.Fragment>
  );
};

export default MoviesList;
