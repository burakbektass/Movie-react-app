import { createContext, PropsWithChildren} from "react";
import {id,name,summary,rating,image,status} from "../models/movie";

type MoviesContextObject = {
  movies: [];
  singleMovie: {};
};

const initialState = {
  movies: [],
  singleMovie: {},
};

export const movie: any = {
  // Type bulamadım
  id: "45",
  name: "Man In Black",
  rating: "9.9",
  image: "https://static.tvmaze.com/uploads/images/medium_portrait/33/84755.jpg",
  category: ["action"],
  status: "running",
  summary:
    "Bu filmin özetidir",
};

const MoviesContext = createContext<MoviesContextObject | any | null>(movie);

export default MoviesContext;

// // const MoviesContextProvider: React.FC<Props<{}>> = (props) => {
  
// //   const contextValue: MoviesContextObject | any = {
// //     // any yazdım ççünkü fonksiyonlar yüzünden hata alıyordum
// //     movies: [],
// //     singleMovie: [],
// //   };

// //   return (
// //     <MoviesContext.Provider value={contextValue}>
// //       {props.children}
// //     </MoviesContext.Provider>
// //   );
// };

// export default MoviesContextProvider;
