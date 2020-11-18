import { axiosApi } from './../../axios/axiosApi';
import {
    SET_IS_LOADING,
    FETCH_SEARCH_RESULTS,
    FETCH_SEARCH_RESULTS_ERROR,
    SET_SORTED_SEARCH_RESULTS,
    DELETE_MOVIE,
    SORT_MOVIES
} from './../movies/types'
const SEARCH_URL = '/search'


export const deleteMovie = (imdbID) => dispatch => {
   dispatch({
       type: DELETE_MOVIE,
      payload:imdbID,
}) 
}

export const sortMovies = (sort) => dispatch => {
    dispatch({
        type: SORT_MOVIES,
       payload:sort,
 }) 
 }

export const fetchMovies = (Title) => async(dispatch) => {
    try{
      dispatch(setLoading(true))
      const data = await axiosApi.get(SEARCH_URL,
         {
            params: {
                Title
            },
          },
        )
      dispatch({type:FETCH_SEARCH_RESULTS,payload:data})
    }
    catch (err) {
        dispatch({type:FETCH_SEARCH_RESULTS_ERROR,payload:err})
    }
    finally{
      dispatch(setLoading(false))
    }
  }

  const setLoading = (payload) => ({
    type: SET_IS_LOADING,
    payload,
});
