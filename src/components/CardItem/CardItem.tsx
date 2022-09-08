import React,{ useState, useEffect} from "react";
import {Route} from 'react-router-dom'
import axios from 'axios';
import "antd/dist/antd.css";
import "./CardItem.scss";
import { Card } from "antd";
import { Link } from "react-router-dom";
import SinglePage from "../../pages/SingleMovie/Singlepage";

const { Meta } = Card;

const CardItem: React.FC = (props) => {
  const movie: any = {
    // Type bulamadım
    id: "45",
    name: "Man In Black",
    rating: "9.9",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/33/84755.jpg",
    category: ["action"],
    status: "running",
    summary:
      "özetdfhdskjfdhfkdfdfhdsfkjdsj",
  };

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
  console.log(moviesState);

  const singleMovie = (name:string="man-in-black"):void => {
    console.log("single movie");
    <Route path ={`/movies/${name}`} element={<SinglePage item={movie}/>}>

    </Route>
  };


  return (
    
      <Link to={`/${movie.name}`}>
        <Card
          onClick={()=> singleMovie(movie.name)}
          className="cardItem"
          hoverable
          cover={<img alt="example" src={movie.image} />}
        >
          <Meta title={movie.name} description={`IMDB / ${movie.rating}`} />
        </Card>
      </Link>
    
  );
};

export default CardItem;
