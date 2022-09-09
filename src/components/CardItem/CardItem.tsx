import React, { useState, useEffect, useContext } from "react";
import MoviesContext from "../../store/moviesContext";
import { Route } from "react-router-dom";
import axios from "axios";
import "antd/dist/antd.css";
import "./CardItem.scss";
import { Card } from "antd";
import { Link } from "react-router-dom";
import Singlepage from "../../pages/SingleMovie/Singlepage";

const { Meta } = Card;

export interface ICardItemProps {
  movie_id?:number
  searchTerm?:string
}

const CardItem: React.FC<ICardItemProps> = (props) => {
  const searchTerm = "the"; // burası context ile searchbardan alınacak
  const [moviesState, setMoviesState] = useState<Array<any>>([]);
  const [singleId,setSingleId] = useState<number>(0)
  const [singleName,setSingleName] = useState<string>("")
  const [routeSingle, setRouteSingle] = useState<boolean>(false);

  useEffect(() => {
    const getMovies = async (key: string) => {
      const { data } = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${key}`
      );
      setMoviesState(data);
    };
    getMovies(searchTerm);
  }, []);
  
  const singleMovie = (id:number, name:string): void => {
    console.log("CardItem içinde singleMovie fonksiyonu");
    <Route path={`/movies/${name}`} element={<Singlepage movie_name={name} movie_id={id} />}></Route>
  };
  //console.log(props.movie_id,)
  return (
    <div className="card-items">
      {moviesState.map((movie, index) => {
        return (
          <Link key={index} to={`/movies/${movie.show.name}`}>
            <Card
              onClick={(e) => singleMovie(movie.show.id, movie.show.name)}
              className="cardItem"
              hoverable
              cover={
                <img
                  alt="example"
                  className="card-image"
                  src={
                    movie.show.image
                      ? movie.show.image.medium
                      : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                  }
                />
              }
            >
              <Meta
                title={movie.show.name}
                description={`IMDB / ${(movie.score * 10).toFixed(1)}`}
              />
            </Card>
            
          </Link>
        );
      })}
    </div>
  );
};

export default CardItem;
