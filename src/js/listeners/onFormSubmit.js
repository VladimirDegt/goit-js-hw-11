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
    instanceApiService.fetchPhoto().then((resolve) => renderPhotos(resolve, e)).catch((error)=> console.log(error))

  };
  