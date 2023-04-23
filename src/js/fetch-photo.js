import { clearPagePhotos } from "./clear-page-photos";

const API_KEY = '35689289-d239eabcb13b35ae6aaf4f6ed';
let optionsSearch = {
  name: '',
  countClick: 0
};

export function fetchPhotoClickSubmit(search) {
  if(optionsSearch.name === search) {
    throw 'Это повторый вызов через сабмит' 
  } else {
    optionsSearch.name = search;
    optionsSearch.countClick = 1;
  }

  clearPagePhotos()

  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=3&page=1`).then(response => {
    if(response.ok) {
      return response.json()
    } else {
      return ('Ошибка') 
    }
  })
};

export function fetchPhotoClickButton() {
  optionsSearch.countClick += 1;
  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${optionsSearch.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=3&page=${optionsSearch.countClick}`).then(response => {
    if(response.ok) {
      return response.json()
    } else {
      return ('Ошибка') 
    }
  })
}
