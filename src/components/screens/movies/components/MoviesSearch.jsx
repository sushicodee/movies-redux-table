import React , {useState,useEffect} from 'react'
import ButtonComponent from '../../../commons/Button/ButtonComponent';
import InputComponent from '../../../commons/input/InputComponent';
import {useDispatch,useSelector} from 'react-redux';
import searchIcon from './../../../../assets/icons/search-24px.svg'
import { fetchMovies } from '../../../../actions/movies/moviesActions';
function MoviesSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie)
    const handleChange = (e) => {
        const {value} = e.target;
        setSearchQuery(value)
    }
    const handleSearch = (e) => {
        dispatch(fetchMovies(searchQuery))
    }
    useEffect(() => {
        function fetchData(){
            dispatch(fetchMovies(searchQuery))
        }
        fetchData();
    }, [])
    return (
        <div className = 'movies-search-container'>
            <div className = 'search-bar'>
            <InputComponent name= 'search' value={searchQuery} placeholder = 'Search movies title' handlechange = {handleChange} />
            <ButtonComponent handleclick = {handleSearch} icon ={searchIcon} />
            </div>
        </div>
    )
}

export default MoviesSearch
