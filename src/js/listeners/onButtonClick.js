import { fetchPhotoClickButton } from "../fetch-photo-click-load-more"
import { renderPhotos } from "../render-photos"

export function onButtonClick(e) {

    fetchPhotoClickButton().then((resolve) => renderPhotos(resolve, e)).catch((error)=> console.log(error))
  };
  