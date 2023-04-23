const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

import { fetchPhotoClickSubmit } from "./js/fetch-photo";
import { fetchPhotoClickButton } from "./js/fetch-photo";
import { renderPhotos } from "./js/render-photos";

document.querySelector('form').addEventListener('submit', onFormSubmit);
document.querySelector('.load-more').addEventListener('click', onButtonClick);
document.querySelector('.load-more').classList.add('is-hidden');

function onFormSubmit (e) {
  e.preventDefault();

  const {searchQuery} = e.target.elements;
  const findItem = searchQuery.value.trim()
  if(!findItem) {
    return
  }

  fetchPhotoClickSubmit(findItem).then(renderPhotos).catch((error)=> console.log(error))
};

function onButtonClick() {
  fetchPhotoClickButton().then(renderPhotos).catch((error)=> console.log(error))
};
