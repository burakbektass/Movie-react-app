import CardItem from "../../components/CardItem/CardItem";
import "../pages.css";
const Singlepage: React.FC = (props) => {
  return (
    <div>
      <h1>Singlepage</h1>
      <div className="single-movie">
        <img
          src={
            props.image
              ? props.image.medium
              : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
          }
          alt={props.name}
        />
        <div className="single-movie-info">
          <h1>{props.name}</h1>
          {props.genres &&
            props.genres.map((genre) => (
              <span key={genre} className="singleshow__genre">
                {genre}
              </span>
            ))}
            <p>
              <strong>Status:</strong> {props.status && props.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {props.rating ? props.rating.average : "No rating"}
            </p>
            <p>{props.summary && removeTags(props.summary)}</p>
        </div>
      </div>
    </div>
  );
};
export default Singlepage;
