import { useRef, useState } from "react";
import './Searchbar.scss';
import { Input } from "antd";

const Searchbar: React.FC = () => {
  const { Search } = Input;
  const [searchTerm, setSearchTerm] = useState<any>("");
  // const movieInputRef = useRef<HTMLInputElement>(null)

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
  
  const onSearch = (e: any) => {
    console.log("search basıldı",e);
    setSearchTerm(e);
  }
  console.log(searchTerm);
  return (
    <Search
      className="searchbar"
      placeholder="search for movies"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={(e) => onSearch(e)} // bu butona basınca direkt yazılı olanı consola basıyor
    />
  );
};

export default Searchbar;
