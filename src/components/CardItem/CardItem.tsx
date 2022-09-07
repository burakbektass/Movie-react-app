import React from "react";
import "antd/dist/antd.css";
import "./CardItem.scss";
import { Card } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";

const { Meta } = Card;

const CardItem: React.FC = () => {
  const movie: any = {
    // Type bulamadım
    id: "4324",
    name: "Batman",
    rating: "8.9",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    category: ["Action", "Drama"],
    status: "Running",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consect",
  };
  return (
    <Router>
      <Link to={`/${movie.name}`}>
        <Card
          className="cardItem"
          hoverable
          cover={<img alt="example" src={movie.image} />}
        >
          <Meta title={movie.name} description={`IMDB / ${movie.rating}`} />
        </Card>
      </Link>
    </Router>
  );
};

export default CardItem;
