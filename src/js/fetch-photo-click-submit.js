import {Spinner} from 'spin.js';

import { clearPagePhotos } from "./clear-page-photos";
import { refs } from "./refs-elements";
import { optionsSearch } from "..";
import { API_KEY } from "..";

export function fetchPhotoClickSubmit(search) {
  refs.btnLoad.classList.add('is-hidden');

  if(optionsSearch.name === search) {
    refs.btnLoad.classList.add('is-hidden');
    throw 'Это повторный вызов через сабмит, ничего не делаем' 
  } else {
    optionsSearch.name = search;
    optionsSearch.countClick = 1;
  }

  clearPagePhotos()
  const spinner = new Spinner().spin(refs.spinner);

  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`).then(response => {
    if(response.ok) {
      spinner.stop();

      return response.json()
    } else {
      spinner.stop();

      return ('Ошибка') 
    }
  })
};
