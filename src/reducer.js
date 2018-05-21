const initialState = {
  messageVisibility: false
}

const message = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case 'TOGGLE_MESSAGE':
      return state  
    default:
      return state
  }
}

export default message 