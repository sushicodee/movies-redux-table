import React from 'react'
import MoviesSearch from './components/MoviesSearch'
import MoviesTable from './components/MoviesTable'

function Movies() {
    return (
        <div className = 'movies-container'>
            <MoviesSearch/>
            <MoviesTable/>
        </div>
    )
}

export default Movies
