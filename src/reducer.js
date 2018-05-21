import { TOGGLE_MESSAGE, GET_MOVIES } from './actions'

const initialState = {
  messageVisibility: false,
  movies: []
}

const message = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case TOGGLE_MESSAGE:
      return { ...state, messageVisibility: !state.messageVisibility}
    case GET_MOVIES:
      return { ...state, movies: payload }    
    default:
      return state
  }
}

export default message 