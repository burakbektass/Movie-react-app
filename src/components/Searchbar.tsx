import { useState, useContext, useRef } from "react";
import "./Header.css";
import { Input } from "antd";

const Searchbar: React.FC = () => {
  const { Search } = Input;
//   const [searchTerm, setSearchTerm] = useState<string>("");
  const movieInputRef = useRef<HTMLInputElement>(null)

  //   const movieCtx = useContext<any>(MoviesContext);
  //   const { searchMovies } = movieCtx;

  const onSearchHandler= (e: React.ChangeEvent<HTMLInputElement>) =>{ 
    e.preventDefault();
    console.log("dfdsfds")
    const searchTerm = movieInputRef.current!.value;
    if (searchTerm.trim() === "") {
      console.log("Invalid Input");
      return;
    } else {
        // setSearchTerm(e.currentTarget.value);
        console.log(searchTerm);
      // searchMovies(searchTerm);
    }
  };

  return (
    <form onSubmit={() => onSearchHandler}>
      <Search
        className="searchbar"
        placeholder="search for movies"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={() => onSearchHandler}// Fonksiyon type ını böyle belirtiyoruz 
      />
    </form>
  );
};

export default Searchbar;
