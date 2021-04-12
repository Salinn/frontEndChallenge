import { useState } from "react" 
import { useFetchAllMovies } from '../../rest';
import useDeepCompareEffect from "use-deep-compare-effect"
import { useMoviesContext, types } from "../../contexts/movies"

export const useHomeProps = () => {
    const { moviesDispatch } = useMoviesContext()
    const { data: movies, loading } = useFetchAllMovies();

    useDeepCompareEffect(() => {
        moviesDispatch({
            type: types.SET_ALL_MOVIES,
            movies
        })
    }, [movies])

    return { isLoading: loading || movies.length === 0 }
}

export const useTopFiveProps = () => {
    const { 
        moviesData: { sortedMovies }
    } = useMoviesContext()
    const [topFiveMovies, setTopFiveMovies] = useState([])

    if(topFiveMovies.length === 0) {
        setTopFiveMovies(sortedMovies.slice(0, 5))
    }

    return { topFiveMovies }
}

export const useBrowseByGenreSectionProps = () => {
    const { 
        moviesData: { genres }
    } = useMoviesContext()
    const genreTitles = Object.keys(genres)
    return { genreTitles }
}

export const useBrowseByAllSectionProps = () => {
    const { 
        moviesData: { sortedMovies }, moviesDispatch
    } = useMoviesContext()

    const sortTypes = [
        { label: "Most Popular", value: "popularityAsc" },
        { label: "Least Popular", value: "popularityDesc" },
        { label: "Most Recent", value: "recentRelease" },
        { label: "Least Recent", value: "oldRelease" },
        { label: "Title (A-Z)", value: "titleAsc" },
        { label: "Title (Z-A)", value: "titleDesc" },
    ]

    const sortByChanged = event => {
        event.preventDefault()
        const { value } = event.target
        moviesDispatch({ type: types.CHANGE_SORT_BY, category: value })
    }

    return { movies: sortedMovies, sortTypes, sortByChanged }
}


export const useTopFiveMovieProps = props => {
    const { movie } = props
    const stringGenres = movie.genres.reduce((list, genre) => {
        const existingTitle = list.length > 0
        if(existingTitle) {
            return `${list}, ${genre}`
        }
        return genre
    }, "")
    const rating = movie.voteAverage.toFixed(1)

    const [isFocused, setIsFocused] = useState(false);
    const onMouseEnter= () => setIsFocused(true)
    const onMouseLeave= () => setIsFocused(false)
    return {
        rating,
        movie,
        stringGenres,
        isFocused,
        onMouseEnter,
        onMouseLeave
    }
}