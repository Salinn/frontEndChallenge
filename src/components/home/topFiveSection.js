import IsTruthy from "components/common/logic/isTruthy"
import React from "react"
import { useTopFiveProps } from "./hooks"
import Movie from "./topFiveMovie"

const TopFiveSection = () => {
    const { topFiveMovies } = useTopFiveProps()
    return (
        <div className="container">
            <div className="grid">
                <h2>
                    <span className="grey-text">Movies:</span> 
                    Top 5
                </h2>
            </div>
            <IsTruthy value={topFiveMovies.length > 0}>
                <div className="grid">
                    {topFiveMovies.map(movie => <Movie key={movie.id} movie={movie} />)}
                </div>
            </IsTruthy>
        </div>
    )
}

export default TopFiveSection