import { useEffect, useState } from "react";
import axios from "axios";
import "./SinglePage.scss";
export interface ISinglePageProps {
  movie_id?: string;
  movie_name?: string;
}
const Singlepage: React.FC<ISinglePageProps> = (props) => {
  
  const searchTerm = "the Batman"; // burası context ile searchbardan alınacak
  const [moviesState, setMoviesState] = useState<Array<any>>([]);

  useEffect(() => {
    const getMovies = async (key: string) => {
      const { data } = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${key}`
      );
      setMoviesState(data);
    };
    getMovies(searchTerm);
  }, []);

  console.log(moviesState);
  const targetMovie = moviesState.find((m) => m.show.id === 757); // buraya props.movie_id bağlanması lazım 

  return (
    <div>
      <h1>Singlepage</h1>

      {moviesState.length > 0 && targetMovie ? (
        <div className="single-movie">
          <img
            src={
              targetMovie.show.image
                ? targetMovie.show.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={targetMovie.show.name}
          />
          <div className="single-movie-info">
            <h1>{targetMovie.show.name}</h1>
            {targetMovie.show.genres &&
              targetMovie.show.genres.map((genre: any) => (
                <span key={genre} className="singleshow_genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong>{" "}
              {targetMovie.show.status && targetMovie.show.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {targetMovie.score
                ? (targetMovie.score * 10).toFixed(1)
                : "No rating"}
            </p>
            <p>{targetMovie.show.summary}</p>
          </div>
        </div>
      ) : (
        <h1>No Movie Found</h1>
      )}
    </div>
  );
};
export default Singlepage;
