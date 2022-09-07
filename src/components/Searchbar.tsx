import { useState, useContext, useRef } from "react";
import "./Header.css";
import { Input } from "antd";

const Searchbar: React.FC = () => {
  const { Search } = Input;
//   const [searchTerm, setSearchTerm] = useState<string>("");
  const movieInputRef = useRef<HTMLInputElement>(null)

  //   const movieCtx = useContext<any>(MoviesContext);
  //   const { searchMovies } = movieCtx;

  // const onSearchHandler= (e: React.ChangeEvent<HTMLInputElement>) =>{ 
  //   e.preventDefault();
  //   const searchTerm = movieInputRef.current!.value;
  //   if (searchTerm.trim() === "") {
  //     console.log("Invalid Input");
  //     return;
  //   } else {
  //       // setSearchTerm(e.currentTarget.value);
  //       console.log(searchTerm);
  //     // searchMovies(searchTerm);
  //   }
  // };
const deneme = (e:any)=>{
  console.log("11",e.target.value);
}
  return (
      <Search
        className="searchbar"
        placeholder="search for movies"
        allowClear
        enterButton="Search"
        size="large"
        onChange={(e) => deneme(e)}// Fonksiyon type ını böyle belirtiyoruz 
      />
  );
};

export default Searchbar;
