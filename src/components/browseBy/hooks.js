import { useParams } from "react-router-dom";
import { useFetchAllMovies } from '../../rest';
import useDeepCompareEffect from "use-deep-compare-effect"
import { useMoviesContext, types } from "../../contexts/movies"

export const useBrowseByProps = () => {
    const { moviesDispatch } = useMoviesContext()
    const { data: movies, loading } = useFetchAllMovies();
    const { genre } = useParams();
    
    useDeepCompareEffect(() => {
        moviesDispatch({
            type: types.SET_ALL_MOVIES,
            movies,
        })
        moviesDispatch({
            type: types.SORT_GENRE,
            category: "popularityAsc",
            genre
        })
    }, [movies])

  
    return {
        genre,
        isLoading: loading || movies.length === 0
    }
}

export const useMoviesByGenreProps = (props) => {
    const { genre } = props
    const { 
        moviesDispatch, 
        moviesData
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

    return { movies: moviesData.genres[genre], sortTypes, sortByChanged }
}

export const useTitleProps = (props) => {
    const { genre } = props
    const { moviesDispatch } = useMoviesContext()

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
        moviesDispatch({ type: types.SORT_GENRE, genre, category: value })
    }

    return { genre, sortTypes, sortByChanged }
}