import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { clearPagePhotos } from './clear-page-photos';

export function renderPhotos ({totalHits, hits}) {
  if(hits.length === 0) {
    clearPagePhotos();
    return Notify.failure('Sorry, there are no images matching your search query. Please try again.')
  }
  
  Notify.success(`Hooray! We found ${totalHits} images.`)

  const template = hits.map( ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
  `
  <div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
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

  document.querySelector('.gallery').innerHTML= template;
};

