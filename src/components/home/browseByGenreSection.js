import IsTruthy from "components/common/logic/isTruthy"
import React from "react"
import { Link } from "react-router-dom"
import { useBrowseByGenreSectionProps } from "./hooks"

const BrowseByGenreSection = () => {
    const { genreTitles, isLoading } = useBrowseByGenreSectionProps()
    return (
        <IsTruthy value={!isLoading}>
            <div className="grid">
                <div className="col">
                    <h3 className="grey-text">Browse</h3>
                    <h1>by Genre</h1>
                </div>
            </div>
            <div className="grid">
            {
                genreTitles.map(genre => {
                    return (
                        <Link key={genre} to={{ pathname: `browseBy/${genre}` }}>
                            <div className="genre-card">
                                <h3 className="link-text">{genre}</h3>
                            </div>
                        </Link>
                    )
                })
            }
            </div>
        </IsTruthy>
    )
}

export default BrowseByGenreSection