import { onFormSubmit } from "./js/listeners/onFormSubmit";
import { onScrollEndOfPage } from "./js/listeners/onScrollEndOfPage";
import { refs } from "./js/refs-elements";
import { instanceApiService } from "./js/api-service";

refs.form.addEventListener('submit', onFormSubmit);
// window.addEventListener('scroll', onScrollEndOfPage);

console.log('instance на початку', instanceApiService);

