import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { renderPhotos } from "../render-photos";
import { instanceApiService } from "../api-service";

export function onScrollEndOfPage(e) {
    if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight &&  window.scrollY !== 0) {
        if(instanceApiService.totalElements < 40) {
            return Notify.info("We're sorry, but you've reached the end of search results.");
        }

        instanceApiService.fetchPhoto().then(({hits}) => {
            instanceApiService.totalElements = hits.length;
            renderPhotos(hits, e)
        }).catch((error)=> console.log(error))
    }
};
