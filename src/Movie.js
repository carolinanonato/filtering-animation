import React from 'react'

function Movie({ movie }) {
    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt=""></img>
        </div>
    )
}

export default Movie