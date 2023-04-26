import { spinner } from "./create-instance-Spinner";
import { refs } from "./refs-elements";

const API_KEY = '35689289-d239eabcb13b35ae6aaf4f6ed';
const BASE_URL = 'https://pixabay.com/api/';

class ApiService {
  constructor() {
    this.findValueOnInput = '';
    this.numberPage = 1;
  }

  fetchPhoto() {
    spinner.spin(refs.spinner)
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.findValueOnInput}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.numberPage}`).then(response => {
      if(response.ok) {
        spinner.stop();
        this.numberPage += 1;
  
        return response.json()
      } else {
        spinner.stop();
  
        return ('Ошибка') 
      }
    })
  }

  get searchValue() {
    return this.findValueOnInput;
  }

  set searchValue(newValue) {
    this.findValueOnInput = newValue;
  }

  resetPage () {
    this.numberPage = 1;
  }
};

export const instanceApiService = new ApiService();