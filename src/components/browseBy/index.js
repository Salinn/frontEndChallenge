import React from "react"
import { useBrowseByProps } from "./hooks"
import IsTruthy from "components/common/logic/isTruthy"
import Title from "./title"
import MoviesByGenre from "./moviesByGenre"
import './browseBy.css';

const BrowseBy = () => {
    const { isLoading, genre } = useBrowseByProps()
    return (
        <IsTruthy value={!isLoading}>
            <Title genre={genre} />
            <MoviesByGenre genre={genre} />
        </IsTruthy>
    )
}

export default BrowseBy