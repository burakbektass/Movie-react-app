import React,{ useState, useEffect, useContext} from "react";
import {Route} from 'react-router-dom';
import {movie} from "../../store/moviesContext";
import axios from 'axios';
import "antd/dist/antd.css";
import "./CardItem.scss";
import { Card } from "antd";
import { Link } from "react-router-dom";
import SinglePage from "../../pages/SingleMovie/Singlepage";

const { Meta } = Card;

export interface ICardItemProps{};
const CardItem: React.FC<ICardItemProps> = (props) => {

  
  
  const myMovie: any | null = {
    // Type bulamadım
    id: "45",
    name: "Man In Black",
    rating: "9.9",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/33/84755.jpg",
    category: ["action"],
    status: "running",
    summary:
    "Bu filmin özetidir",
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

  const singleMovie = (name:any):void => {
    console.log("single movie");
    <Route path ={`/movies/${name}`} element={<SinglePage id={myMovie.id}/>}>

    </Route>
  };


  return (
    
      <Link to={`/movies/${myMovie.name}`}>
        <Card
          onClick={()=> singleMovie(myMovie.name)}
          className="cardItem"
          hoverable
          cover={<img alt="example" src={myMovie.image} />}
        >
          <Meta title={myMovie.name} description={`IMDB / ${myMovie.rating}`} />
        </Card>
      </Link>
    
  );
};

export default CardItem;
