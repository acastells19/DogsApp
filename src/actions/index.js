export const setBreedImagesCount = (breed, count) => ({
  type: 'SET_BREED_IMAGES_COUNT',
  name: breed,
  count: count
})

export const setSpinnerMode = spinner => ({
  type: 'SET_SPINNER',
  spinner: spinner
})
