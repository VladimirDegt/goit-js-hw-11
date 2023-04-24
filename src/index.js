import { onButtonClick } from "./js/listeners/onButtonClick";
import { onFormSubmit } from "./js/listeners/onFormSubmit";
import { refs } from "./js/refs-elements";

export const API_KEY = '35689289-d239eabcb13b35ae6aaf4f6ed';
export let optionsSearch = {
  name: '',
  countClick: 0
};

refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoad.addEventListener('click', onButtonClick);
refs.btnLoad.classList.add('is-hidden');

