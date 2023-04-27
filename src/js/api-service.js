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

    const instanceAxios = axios.create({
      baseURL: `${BASE_URL}`,
      params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        q: this.findValueOnInput,
        per_page: this.totalElementsOnPage,
        page: this.numberPage,
      },

      onUploadProgress: spinner.spin(refs.spinner),

      //onDownloadProgress: spinner.stop(), - чому так не працює?
      onDownloadProgress: function () {
        spinner.stop();
      },

      transformResponse: [function (data) {

        return data;
      }],
    });

    const response = await instanceAxios.get(BASE_URL)
      .catch(function(error) { 
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
    // де доцільно цю умову прописати?
    this.numberPage += 1;

    return JSON.parse(response.data)
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