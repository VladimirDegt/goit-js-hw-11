import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { renderPhotos } from "../render-photos";
import { instanceApiService } from "../api-service";

export async function onScrollEndOfPage(e) {
  if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight &&  window.scrollY !== 0) {
 
    if(instanceApiService.totalElementsOnPage < 40) {
          return Notify.info("We're sorry, but you've reached the end of search results.");
      }

    try {
      const objectResolve = await instanceApiService.fetchPhoto();
      const { hits } = objectResolve;

      instanceApiService.totalElementsOnPage = hits.length;
      renderPhotos(hits, e)
      } catch(error) {
        Notify.failure('Что-то пошло не так');
        console.log(error.message);
      } 
}
};
