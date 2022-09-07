import {
  SEARCH_MOVIES,
  SET_LOADING,
  SET_SINGLE_MOVIE,
  CLEAR_SINGLE_MOVIE,
} from "./types";
  import Movie from '../models/movie';

  type MovieState ={
    movies: Movie[],
    singleMovie:{},
    loading: boolean,
  }
  
const moviesReducer = (state:MovieState,action:any) =>{  // action için type bulamadım
    switch(action.type){
        case SET_LOADING:
            return{
              ...state,
              loading:true,
            };
        case SEARCH_MOVIES:
          return {
            ...state,
            movies:action.payload,
            loading:false,

          };
        case SET_SINGLE_MOVIE:
          return {
            ...state,
            singleMovie:action.payload,
            loading:false,
          };
        case CLEAR_SINGLE_MOVIE:
          return{
            ...state,
            singleMovie:{},

          };
        default:
          return state;
    }   
};

export default moviesReducer;