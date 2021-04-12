import React from "react"

const Details = (props) => {
    const { movie } = props
    return (
        <div className="row">
            <div className="col">
                <img src={movie.posterPath} alt={`Poster for ${movie.title}`}/>
            </div>
            <div className="col">
                <h1>{movie.title}{" "}<span className="grey-text">({movie.releaseDate.slice(0,4)})</span></h1>
                <h4>{movie.genres.join(", ")}</h4>
                <h6>Director: {" "}{movie.director.name}</h6>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default Details