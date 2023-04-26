import { renderPhotos } from "../render-photos";
import { instanceApiService } from "../api-service";

export function onScrollEndOfPage(e) {
    if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight &&  window.scrollY !== 0) {
        instanceApiService.fetchPhoto().then((resolve) => renderPhotos(resolve, e)).catch((error)=> console.log(error))
    }
};
