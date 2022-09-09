import React,{useContext} from "react";
// components
import Header from "./components/Header/Header";
import SinglePage from './pages/SingleMovie/Singlepage';
import MoviesContext,{movie} from "./store/moviesContext";
import "./App.css";

export interface IApplicationProps {}
const App: React.FC<IApplicationProps> = (props) => {
  const movieCtx = useContext(MoviesContext);
  return (
    <MoviesContext.Provider value={movie}>
      <div className="App">
        <Header></Header>
        {/* <SinglePage movie_id={movieCtx.id}></SinglePage> */}
      </div>
    </MoviesContext.Provider>
  );
};

export default App;
