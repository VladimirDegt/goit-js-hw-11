import { fetchPhotoClickSubmit } from "../fetch-photo-click-submit";
import { renderPhotos } from "../render-photos"
import { refs } from "../refs-elements";

export function onFormSubmit (e) {
    e.preventDefault();
  
    const {searchQuery} = e.target.elements;
    const findItem = searchQuery.value.trim()
    if(!findItem) {
      return
    }

    fetchPhotoClickSubmit(findItem).then((resolve) => renderPhotos(resolve, e)).catch((error)=> console.log(error))
  };
  