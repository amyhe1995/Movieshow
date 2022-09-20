import { SAVE_MOVIES } from '../actions/movies'

function reducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SAVE_MOVIES:
      return payload
    default:
      return state
  }
}

export default reducer
