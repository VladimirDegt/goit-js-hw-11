import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { renderPhotos } from "../render-photos";
import { instanceApiService } from "../api-service";

export async function onScrollEndOfPage(e) {

  console.log('instance после скролла перед resolve', instanceApiService.searchValue);

  if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
 
    if(instanceApiService.totalElements < 40) {
          return Notify.info("We're sorry, but you've reached the end of search results.");
      }

    try {
      const objectResolve = await instanceApiService.fetchPhoto();
      const { hits } = objectResolve;

      instanceApiService.totalElements = hits.length;

      console.log('instance после скролла после запроса', instanceApiService);

      renderPhotos(hits, e)
      } catch(error) {
        Notify.failure('Что-то пошло не так');
        console.log(error.message);
      } 
}

console.log('логгирование, если условие скролла не выполнилось');
};
