import { optionsSearch } from "..";
import { API_KEY } from "..";

export function fetchPhotoClickButton() {
    optionsSearch.countClick += 1;
    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${optionsSearch.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=3&page=${optionsSearch.countClick}`).then(response => {
      if(response.ok) {
        return response.json()
      } else {
        return ('Ошибка') 
      }
    })
  };
