import React from "react";
// components
import Header from "./components/Header/Header";
import MoviesContextProvider from "./store/moviesContext";
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
