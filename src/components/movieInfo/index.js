import React from "react"
import Title from "./title"
import Details from "./details"
import Cast from "./cast"
import { useLocation } from "react-router-dom"

const MovieInfo = props => {
    const { state: { movie }} = useLocation()
    console.log(movie)
    return (
        <div>
            <Title />
            <Details movie={movie} />
            <Cast people={movie.cast} />
        </div>
    )
}

export default MovieInfo