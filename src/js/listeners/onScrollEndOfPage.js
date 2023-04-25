import { fetchPhotoClickButton } from "../fetch-photo-click-load-more";
import { renderPhotos } from "../render-photos";

export function onScrollEndOfPage(e) {
    if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        fetchPhotoClickButton().then((resolve) => renderPhotos(resolve, e)).catch((error)=> console.log(error))
    }
};
