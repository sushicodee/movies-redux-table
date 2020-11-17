import React ,{useState,useCallback,useEffect}from 'react'
import ButtonComponent from '../../../commons/Button/ButtonComponent'
import keyUp from './../../../../assets/icons/arrow_drop_up-24px.svg'
import keyDown from './../../../../assets/icons/arrow_drop_down-24px.svg'
import trashIcon from './../../../../assets/icons/delete.png'
import {useDispatch,useSelector} from 'react-redux';
import { deleteMovie, sortMovies } from '../../../../actions/movies/moviesActions'
function MoviesTable() {
    const fields = ['Title','Year','imdbID']
    const movie = useSelector(state => state.movie)
    const {isLoading,searchResults:{data}} = movie;
    const dispatch = useDispatch();

    const toggleSort = (sortVal,orderBy) => {
    const sortBy = sortVal === 1 ?'asc':'desc';
        dispatch(sortMovies({sortBy,orderBy}));
    }
    const handleDeleteMovie = (id) => {
        dispatch(deleteMovie(id))
    }

    const verticalButtons = (sortBy) => {
        return(
            <span>
                <ButtonComponent icon = {keyUp} handleclick = {() => toggleSort(1,sortBy)}/>
                <ButtonComponent icon = {keyDown} handleclick = {() => toggleSort(-1,sortBy)}/>
            </span>
        )
    }
    return (
        <div className = 'table-component'>
            <table className ='table-contents'>
                <thead>
                    <tr>
                    {fields.map((heading) => {
                    return (
                    <th key = {heading}>
                        {heading}{verticalButtons(heading)}
                    </th>
                    )})}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((data) => 
                        <tr key = {data.imdbID}>
                            {fields.map(key => <td key={data[key]}>{data[key]} </td>)}
                           <td>
                            <ButtonComponent key = {data.imdbID}  icon ={trashIcon} handleclick = {() =>handleDeleteMovie(data.imdbID)}/>
                           </td>
                        </tr>
                    )}
                    {data && data.length === 0 && !isLoading &&  
                        <tr>
                           No Movies found
                        </tr>
                }
                </tbody>
            </table>        
        </div>
    )
}

export default MoviesTable
