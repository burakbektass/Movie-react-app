import React, { useState, useEffect, useContext } from "react";
import MoviesContext from "../../store/moviesContext";
import { Route } from "react-router-dom";
import axios from "axios";
import "antd/dist/antd.css";
import "./CardItem.scss";
import { Card } from "antd";
import { Link } from "react-router-dom";
import SinglePage from "../../pages/SingleMovie/Singlepage";

const { Meta } = Card;

export interface ICardItemProps {}

const CardItem: React.FC<ICardItemProps> = (props) => {
  const movieCtx = useContext(MoviesContext);

  const searchTerm = "avengers"; // burası context ile searchbardan alınacak
  const [moviesState, setMoviesState] = useState<Array<any>>([]);

  useEffect(() => {
    const getMovies = async (key: string) => {
      const { data } = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${key}`
      );
      setMoviesState(data);
    };
    getMovies(searchTerm);
  }, []);
  console.log(moviesState);

  const singleMovie = (name: any, id: string): void => {
    console.log("single movie");
    console.log(id);
    <Route path={`/movies/${name}`} element={<SinglePage movie_id={id} />} />;
  };

  return (
    <div className="card-items">
      {moviesState.map((movie, index) => {
        return (
          <Link key={index} to={`/movies/${movie.show.name}`}>
            <Card
              onClick={() => singleMovie(movie.show.name, movie.show.id)}
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
