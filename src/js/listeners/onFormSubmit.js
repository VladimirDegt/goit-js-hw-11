import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { instanceApiService } from "../api-service";
import { renderPhotos } from "../render-photos";
import { clearPagePhotos } from "../clear-page-photos";

export function onFormSubmit (e) {
    e.preventDefault();
  
    const {searchQuery} = e.target.elements;
    const findItem = searchQuery.value.trim()
    if(!findItem) {
      return
    }

    if(instanceApiService.searchValue === findItem) {
      return
    }

    clearPagePhotos();

    instanceApiService.searchValue = findItem;
    instanceApiService.resetPage();
    instanceApiService.resetTotalElementsOnPage();
    instanceApiService.fetchPhoto().then(({totalHits, hits}) => {
      if(hits.length === 0) {
        return Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      }

      Notify.success(`Hooray! We found ${totalHits} images.`)
      instanceApiService.totalElementsOnPage = hits.length;
      
      renderPhotos(hits, e)
    }).catch((error)=> console.log(error))

  };
  