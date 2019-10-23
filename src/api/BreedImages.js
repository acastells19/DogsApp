import { store } from '../index'
import * as actions from '../actions'

export function setImagesCountPerBreed() {
  store.dispatch(actions.setSpinnerMode(true));
  fetch("https://dog.ceo/api/breeds/list/all", {}).then(function(res) {
    switch(res.status) {
      case 200:
      	res.json().then(function (result) {
          const breeds = Object.keys(result.message);
          breeds.forEach(function (breed, index) {
            store.dispatch(actions.setSpinnerMode(true));
            fetch("https://dog.ceo/api/breed/" + breed + "/images", {}).then(function(res) {
              switch(res.status) {
                case 200:
                  res.json().then(function (result) {
                    store.dispatch(actions.setBreedImagesCount(breed, result.message.length));
                  });
                  break;
                default:
                  break;
              }
              store.dispatch(actions.setSpinnerMode(false));
            })
          });
      	});
        break;
      default:
        break;
    }
    store.dispatch(actions.setSpinnerMode(false));
  })
}

