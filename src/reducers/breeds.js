const breeds = (state = [], action) => {
  switch (action.type) {
    case 'SET_BREEDS':
      let breeds = Object.keys(action.breeds);
      return breeds;
    default:
      return state
  }
}

export default breeds