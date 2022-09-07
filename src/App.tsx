import React from "react";
// components
import Header from "./components/Header";
import CardItem from "./components/CardItem";
import MoviesContextProvider from "./store/movies-context";
import MoviesContext from './store/movies-context'
import "./App.css";

export interface IApplicationProps {}
const App: React.FC<IApplicationProps> = (props) => {
  return (
    <MoviesContextProvider>
      <div className="App">
        <Header></Header>
      </div>
    </MoviesContextProvider>
  );
};

export default App;
