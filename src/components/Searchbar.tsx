import { useState, useContext } from "react";
import MoviesContext from "../store/movies-context";
import "./Header.css";
import {Input,} from "antd";

const Searchbar: React.FC = () => {
 const {Search} = Input
  const [searchTerm, setSearchTerm] = useState<string>("");

//   const movieCtx = useContext<any>(MoviesContext);
//   const { searchMovies } = movieCtx;

  const onSearchHandler = (event:React.FormEvent) => {
    event.preventDefault();
    if(searchTerm === ""){
        console.log("Invalid Input")
    }else{
        // searchMovies(searchTerm);
    }
  };

  return (
    <div>  
        <Search 
            className="searchbar"
          placeholder="search for movies"
          allowClear
          enterButton="Search"
          size="large"
          // onSearch={onSearch}
        />
    </div>  
  );
};

export default Searchbar;
