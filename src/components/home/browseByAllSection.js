import React from "react"
import { Link } from "react-router-dom"
import { useBrowseByAllSectionProps } from "./hooks"
import DropDown from "components/common/forms/dropDown"

const BrowseByAllSection = () => {
    const { movies, sortTypes, sortByChanged } = useBrowseByAllSectionProps()
    return (
        <>
        <div className="row">
            <div className="col">
                <h3 className="grey-text">Movies</h3>
                <h1>Browse All</h1>
            </div>
            <div className="col align-br">
                <DropDown label="Sort by" options={sortTypes} onChange={sortByChanged} />
            </div>
            </div>
            <div className="grid">
            {
                movies.map(movie => {
                    return (
                        <div key={movie.id} className="card">
                            <Link to={{ pathname: `${movie.id}/movieInfo`, state: { movie } }}>
                                <img src={movie.posterPath} alt={`${movie.title} Poster`} className="movie-poster"/>
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default BrowseByAllSection