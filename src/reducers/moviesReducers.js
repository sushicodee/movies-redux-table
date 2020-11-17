import {
  SET_IS_LOADING,
  FETCH_SEARCH_RESULTS,
  FETCH_SEARCH_RESULTS_ERROR,
  DELETE_MOVIE,
  SORT_MOVIES,
} from "./../../src/actions/movies/types";

const INITIAL_STATE = {
  searchResults: [],
  isLoading: false,
  sort:{
      sortBy:'asc',
      orderBy:'Title'
  },
  errors: {},
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case FETCH_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case FETCH_SEARCH_RESULTS_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case DELETE_MOVIE:{
        return {
            ...state,
            searchResults:{
                ...state.searchResults,
                data:state.searchResults.data.filter(data => data.imdbID !== action.payload)
            }
        }
    }    
    case SORT_MOVIES:{
        const {sortBy,orderBy} = action.payload;
        if(state.sort.sortBy === sortBy && state.sort.orderBy === orderBy){
            return {
                ...state
            }
        }
        const sortedMovies = state.searchResults.data && state.searchResults.data.sort((a, b) => {
            if (a[orderBy] < b[orderBy]) {
              return sortBy === 'asc' ? -1 : 1;
            }
            if (a[orderBy] > b[orderBy]) {
              return sortBy === 'asc' ? 1 : -1;
            }
            return 0;
          });
          
        return{
            ...state,
            searchResults:{
                ...state.searchResults,
                data:sortedMovies
            },
            sort:{
                sortBy,
                orderBy
            }
        }
    }
    default:
      return state;
  }
};
