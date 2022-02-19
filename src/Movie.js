import React from 'react'

function Movie({ movie }) {
    return (
        <>
            <h1>{movie.title}</h1>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt=""></img>
        </>
    )
}

export default Movie