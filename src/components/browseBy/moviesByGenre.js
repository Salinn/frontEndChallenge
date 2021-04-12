import React from "react"
import { Link } from "react-router-dom"
import { useMoviesByGenreProps } from "./hooks"

const MoviesByGenre = (props) => {
    const { movies } = useMoviesByGenreProps(props)
    return (
        <div className="grid">
            {
                movies.map(movie => {
                    return (
                        <div key={movie.id} className="card">
                            <Link to={{ pathname: `/${movie.id}/movieInfo`, state: { movie } }}>
                                <img src={movie.posterPath} alt={`${movie.title} Poster`} className="movie-poster"/>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MoviesByGenre