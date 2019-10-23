import * as actions from '../actions'

export function setImagesCountPerBreed(dispatch) {
  dispatch(actions.setSpinnerMode(true));
  fetch("https://dog.ceo/api/breeds/list/all", {}).then(function(res) {
    switch(res.status) {
      case 200:
      	res.json().then(function (result) {
          const breeds = Object.keys(result.message);
          breeds.forEach(function (breed, index) {
            dispatch(actions.setSpinnerMode(true));
            fetch("https://dog.ceo/api/breed/" + breed + "/images", {}).then(function(res) {
              switch(res.status) {
                case 200:
                  res.json().then(function (result) {
                    dispatch(actions.setBreedImagesCount(breed, result.message.length));
                  });
                  break;
                default:
                  break;
              }
              dispatch(actions.setSpinnerMode(false));
            })
          });
      	});
        break;
      default:
        break;
    }
    dispatch(actions.setSpinnerMode(false));
  })
}

