const breeds = (state = [], action) => {
  switch (action.type) {
    case 'SET_BREED_IMAGES_COUNT':
      return [
        ...state,
        {
          breed: action.breed,
          count: action.count
        }
      ]
    default:
      return state
  }
}

export default breeds