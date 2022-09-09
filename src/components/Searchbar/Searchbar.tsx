import React, { useRef, useState } from "react";
import { Route } from "react-router-dom";
import "./Searchbar.scss";
import { Input } from "antd";
import CardItem from "../CardItem/CardItem";

const Searchbar: React.FC = () => {
  const { Search } = Input;
  const [searchTerm, setSearchTerm] = useState<any>("");

  const onSearch = (e: any) => {
    console.log("search basıldı", e);
    setSearchTerm(e);
  };

  console.log(searchTerm);
  return (
    <React.Fragment>
      <Search
        className="searchbar"
        placeholder="search for movies"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={(e) => onSearch(e)} // bu butona basınca direkt yazılı olanı consola basıyor
      />
    </React.Fragment>
  );
};

export default Searchbar;
