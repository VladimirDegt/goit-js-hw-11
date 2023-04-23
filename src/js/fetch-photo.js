const API_KEY = '35689289-d239eabcb13b35ae6aaf4f6ed';
let optionsSearch = {};

export function fetchPhoto(search) {
  if(!optionsSearch.hasOwnProperty(search)) {
    optionsSearch[search] = 1;
  } else {
    optionsSearch[search] += 1;
  }
  console.log(optionsSearch[search]);
  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${optionsSearch[search]}`).then(response => {
    if(response.ok) {
      return response.json()
    } else {
      return ('Ошибка') 
    }
  })
};


