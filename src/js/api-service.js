import axios from 'axios';

import { spinner } from "./create-instance-Spinner";
import { refs } from "./refs-elements";

const API_KEY = '35689289-d239eabcb13b35ae6aaf4f6ed';
const BASE_URL = 'https://pixabay.com/api/';

class ApiService {
  constructor() {
    this.findValueOnInput = '';
    this.numberPage = 1;
    this.totalElementsOnPage = 40;
  }

  async fetchPhoto() {
    spinner.spin(refs.spinner)
    
    const response = await axios(BASE_URL, {
      params: {
        key: API_KEY,
        q: this.findValueOnInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: this.totalElementsOnPage,
        page: this.numberPage,
      }
    })
    .catch(function(error) {
      spinner.stop();
  
      if(error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    })

    spinner.stop();
    this.numberPage += 1;

    return response.data;
  }; 

  get searchValue() {
    return this.findValueOnInput;
  }

  set searchValue(newValue) {
    this.findValueOnInput = newValue;
  }

  get totalElements() {
    return this.totalElementsOnPage;
  }

  set totalElements(newTotal) {
    this.totalElementsOnPage = newTotal;
  }

  resetPage () {
    this.numberPage = 1;
  }

  resetTotalElementsOnPage () {
    this.totalElementsOnPage = 40;
  }

};

export const instanceApiService = new ApiService();