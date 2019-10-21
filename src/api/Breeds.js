import { store } from '../index'
import * as actions from '../actions'

export function getAllBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all", {}).then(function(res) {
    switch(res.status) {
      case 200:
      	res.json().then(function (result) {
      		store.dispatch(actions.setBreeds(result.message));
      	});
        break;
      default:
        break;
    }
  })
}