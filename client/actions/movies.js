import { fetchAllMovies } from '../apis/movies'

// VARS

export const SAVE_MOVIES = 'SAVE_MOVIES'

// ACTION CREATORS

function saveMovies(moviesArr) {
  return {
    type: SAVE_MOVIES,
    payload: moviesArr,
  }
}

// THUNKS

export function getTheMovies() {
  return async (dispatch) => {
    try {
      const movieArr = await fetchAllMovies()
      // console.log('thunk', movieArr)
      dispatch(saveMovies(movieArr))
    } catch (err) {
      console.error(err.message)
    }
  }
}
