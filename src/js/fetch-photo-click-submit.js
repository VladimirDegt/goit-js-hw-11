import { clearPagePhotos } from "./clear-page-photos";
import { refs } from "./refs-elements";
import { optionsSearch } from "..";
import { API_KEY } from "..";

export function fetchPhotoClickSubmit(search) {
  if(optionsSearch.name === search) {
    refs.btnLoad.classList.add('is-hidden');
    throw 'Это повторый вызов через сабмит' 
  } else {
    optionsSearch.name = search;
    optionsSearch.countClick = 1;
  }

  clearPagePhotos()

  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`).then(response => {
    if(response.ok) {
      return response.json()
    } else {
      return ('Ошибка') 
    }
  })
};
