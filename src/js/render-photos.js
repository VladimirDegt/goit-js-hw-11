import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { clearPagePhotos } from './clear-page-photos';
import { refs } from './refs-elements';

export function renderPhotos (resolve, event) {
  const {totalHits, hits} = resolve

  if(hits.length === 0) {
    clearPagePhotos();
    refs.btnLoad.classList.add('is-hidden')
    return Notify.failure('Sorry, there are no images matching your search query. Please try again.')
  }
  
  if(event.target === refs.form) {
    Notify.success(`Hooray! We found ${totalHits} images.`)
    // refs.btnLoad.classList.remove('is-hidden');
  }
  
  const template = hits.map( ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
  `
  <div class="photo-card">
    <div class="photo">
      <a href="${largeImageURL}" alt="${tags}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
    </div>
    <div class="info">
      <div>
        <p class="info-item"><b>Likes</b></p>
        <p>${likes}</p>
      </div>
      <div>
        <p class="info-item"><b>Views</b></p>
        <p>${views}</p>
      </div>
      <div>
        <p class="info-item"><b>Comments</b></p>
        <p>${comments}</p>
      </div>
      <div>
        <p class="info-item"><b>Downloads</b></p>
        <p>${downloads}</p>
      </div>
    </div>
  </div>
  `
  ).join('');

  refs.gallery.insertAdjacentHTML('beforeend', template);
  
  refs.btnLoad.classList.remove('is-hidden');

  let gallery = new SimpleLightbox('.gallery .photo-card .photo a', {
    close: false, 
    showCounter: false,
    captionsData: 'alt',
    captionDelay: 250,
    captionClass: 'text__label',
  });
  gallery.refresh()
};

