import React from "react";
// components
import Header from "./components/Header";
import CardItem from "./components/CardItem";
import "./App.css";

export interface IApplicationProps {}
const App: React.FC<IApplicationProps> = (props) => {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        
        <CardItem></CardItem>
      </div>
    </div>
  );
};

export default App;
