import React from "react";
// components
import Header from "./components/Header/Header";
import MoviesContext,{movie} from "./store/moviesContext";
import "./App.css";

export interface IApplicationProps {}
const App: React.FC<IApplicationProps> = (props) => {
  
  return (
    <MoviesContext.Provider value={movie}>
      <div className="App">
        <Header></Header>
      </div>
    </MoviesContext.Provider>
  );
};

export default App;
