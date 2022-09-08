import CardItem from "../../components/CardItem/CardItem";
import "./SinglePage.scss";
export interface ISinglePageProps{};
const Singlepage: React.FC<ISinglePageProps> = (props) => {
  const myMovie: any = {
    // Type bulamadım
    id: "45",
    name: "Man In Black",
    rating: "9.9",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/33/84755.jpg",
    genre: ["action"],
    status: "running",
    summary:
    "Bu filmin özetidir",
  };
  return (
    <div>
      <h1>Singlepage</h1>
      <div className="single-movie">
        <img
          src={
            myMovie.image
              ? myMovie.image
              : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
          }
          alt={myMovie.name}
        />
        <div className="single-movie-info">
          <h1>{myMovie.name}</h1>
          {myMovie.genres &&
            myMovie.genres.map((genre:any) => (
              <span key={genre} className="singleshow__genre">
                {genre}
              </span>
            ))}
            <p>
              <strong>Status:</strong> {myMovie.status && myMovie.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {myMovie.rating ? myMovie.rating.average : "No rating"}
            </p>
            <p>{myMovie.summary}</p>
        </div>
      </div>
    </div>
  );
};
export default Singlepage;
