import React , {useState,useEffect} from 'react'
import ButtonComponent from '../../../commons/Button/ButtonComponent';
import InputComponent from '../../../commons/input/InputComponent';
import {useDispatch} from 'react-redux';
import searchIcon from './../../../../assets/icons/search-24px.svg'
import { fetchMovies } from '../../../../actions/movies/moviesActions';
import './MoviesSearch.scss';
function MoviesSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const {value} = e.target;
        setSearchQuery(value)
    }
    
    const handleKeyUp = e => {
        if(e.key === 'Enter'){
            handleSearch();
        }
    }
    const handleSearch = () => {
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
            <InputComponent  handlekeyup = {handleKeyUp} name= 'search' value={searchQuery} placeholder = 'Search movies title' handlechange = {handleChange} />
            <ButtonComponent handleclick = {handleSearch} icon ={searchIcon} />
            </div>
        </div>
    )
}

export default MoviesSearch
