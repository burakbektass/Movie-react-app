import { createContext, PropsWithChildren} from "react";

export const movie:any = {
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

const MoviesContext = createContext<any | null>(movie);

export default MoviesContext;