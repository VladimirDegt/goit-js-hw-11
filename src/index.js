const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

import { fetchPhoto } from "./js/fetch-photo";
import { renderPhotos } from "./js/render-photos";

document.querySelector('form').addEventListener('submit', onFormSubmit);

function onFormSubmit (e) {
  e.preventDefault();

  const {searchQuery} = e.target.elements;
  const findItem = searchQuery.value.trim()
  if(!findItem) {
    return
  }

  fetchPhoto(findItem).then(renderPhotos).catch((error)=> console.log(error))
}