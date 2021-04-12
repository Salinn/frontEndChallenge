import React from "react"
import { Link } from "react-router-dom"
import IsTruthy from "components/common/logic/isTruthy"
import Star from "../../assets/Star.svg"
import { useTopFiveMovieProps } from "./hooks"

const TopFiveMovie = props => {
    const {
        movie,
        rating,
        stringGenres,
        isFocused,
        onMouseEnter,
        onMouseLeave, 
    } = useTopFiveMovieProps(props)
    return (
        <div className="card top-five-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img src={movie.posterPath} alt={`${movie.title} Poster`} className="movie-poster"/>
            <div className="movieDetails">
                <div className="movieInfo">
                    <h2>{movie.title}</h2>
                    <p>{stringGenres}</p>
                </div>
                <div className="movieRating">
                    <img src={Star} alt="stars" className="starIcon" />
                    <span>{rating}</span>
                </div>
            </div>
            <IsTruthy value={isFocused}>
                <Link className="btn-link" to={{ pathname: `${movie.id}/movieInfo`, state: { movie } }}>View Details</Link>
            </IsTruthy>
        </div>
    )
}

export default TopFiveMovie