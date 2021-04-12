import { hasKey } from "utils/object";

const types = {
  SET_ALL_MOVIES: "SET_ALL_MOVIES",
  CHANGE_SORT_BY: "CHANGE_SORT_BY",
  SORT_GENRE: "SORT_GENRE"
};

const initialState = {
  allMovies: [],
  sortedMovies: [],
  genres: {},
};

const reducer = (state = initialState, action) => {
  const { type, } = action;
  switch (type) {
    case types.SET_ALL_MOVIES:
      return {
        ...state,
        allMovies: action.movies,
        sortedMovies: sortMoviesBy({ movies: action.movies, category: "popularityAsc" }),
        genres: findAndSortGenres(action.movies)
      }
    case types.CHANGE_SORT_BY:
      return {
        ...state,
        sortedMovies: sortMoviesBy({ movies: state.allMovies, category: action.category }),
      }
    case types.SORT_GENRE:
      return {
        ...state,
        sortedMovies: sortMoviesBy({ movies: state.genres[action.genre], category: action.category }),
      }
    default:
      return state;
  }
};


export const sortMoviesBy = props => {
  const { movies = [], category } = props
  switch(category) {
    case "popularityAsc":
      return movies.sort((a, b) => {
        return b.popularity - a.popularity || b.voteAverage - a.voteAverage || b.voteCount - a.voteCount
      })
    case "popularityDesc":
      return movies.sort((a, b) => {
        return a.popularity - b.popularity || a.voteAverage - b.voteAverage || a.voteCount - b.voteCount
      })
    case "recentRelease":
      return movies.sort((a, b) => {
        return new Date(b.releaseDate) - new Date(a.releaseDate)
      })
    case "oldRelease":
      return movies.sort((a, b) => {
        return new Date(a.releaseDate) - new Date(b.releaseDate)
      })
    case "titleAsc":
      return movies.sort((a, b) => {
        return a.title.localeCompare(b.title)
      })
    case "titleDesc":
      return movies.sort((a, b) => {
        return b.title.localeCompare(a.title)
      })
    default:
      return movies.sort((a, b) => {
          return b.popularity - a.popularity || b.voteAverage - a.voteAverage || b.voteCount - a.voteCount
        })
  }
}

const findAndSortGenres = movies => {
  return movies.reduce((genres, movie) => {
    movie.genres.forEach(movieGenre => {
      if(hasKey({ obj: genres, key: movieGenre })) {
        genres[movieGenre] = [...genres[movieGenre], movie]
      } else {
        genres[movieGenre] = [movie]
      }
    })

    return genres
  }, {})
}

export { types, initialState, reducer };
