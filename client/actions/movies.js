import { fetchAllMovies, postMovie } from '../apis/movies'

// VARS

export const SAVE_MOVIES = 'SAVE_MOVIES'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'

// ACTION CREATORS

function saveMovies(moviesArr) {
  return {
    type: SAVE_MOVIES,
    payload: moviesArr,
  }
}

function saveOneMovie(movieObj) {
  return {
    type: SAVE_ONE_MOVIE,
    payload: movieObj,
  }
}

// THUNKS

export function getTheMovies() {
  return async (dispatch) => {
    try {
      const movieArr = await fetchAllMovies()
      dispatch(saveMovies(movieArr))
    } catch (err) {
      console.error(err.message)
    }
  }
}

export function addAMovie(movie) {
  return async (dispatch) => {
    const tidyMovie = {
      title: movie.title,
      img: movie.image,
      imdb_id: movie.id,
    }

    const movieFromServer = await postMovie(tidyMovie)
    dispatch(saveOneMovie(movieFromServer))
  }
}
