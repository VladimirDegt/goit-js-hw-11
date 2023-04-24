import {Spinner} from 'spin.js';

import { optionsSearch } from "..";
import { API_KEY } from "..";
import { refs } from './refs-elements';

export function fetchPhotoClickButton() {
  refs.btnLoad.classList.add('is-hidden');
  optionsSearch.countClick += 1;
  const spinner = new Spinner().spin(refs.spinner);

  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${optionsSearch.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${optionsSearch.countClick}`).then(response => {
    if(response.ok) {
      spinner.stop();

      return response.json()
    } else {
      spinner.stop();

      return ('Ошибка') 
    }
  })
  };
