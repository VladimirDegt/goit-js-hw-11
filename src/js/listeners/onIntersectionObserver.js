import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { renderPhotos } from "../render-photos";
import { instanceApiService } from "../api-service";

export function onIntersectionObserver() {
  const observer = new IntersectionObserver( (entries, observer) => {
    entries.forEach(async (entry) => {
      if(entry.isIntersecting){
        console.log('произошло пересечение');
        observer.unobserve(entry.target);

        console.log('instance после скролла перед resolve', instanceApiService.searchValue);
        if(instanceApiService.totalElements < 40) {
          return Notify.info("We're sorry, but you've reached the end of search results.");
        }

        try {
          const objectResolve = await instanceApiService.fetchPhoto();
          const { hits } = objectResolve;
    
          instanceApiService.totalElements = hits.length;
    
          console.log('instance после скролла после запроса', instanceApiService);
    
          renderPhotos(hits)
          } catch(error) {
            Notify.failure('Что-то пошло не так');
            console.log(error.message);
          } 

      }
    }
    )
  }, {
    threshold: 1,
  });

  observer.observe(document.querySelector('.gallery > .photo-card:last-child'))
  
};




