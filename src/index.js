import { onFormSubmit } from "./js/listeners/onFormSubmit";
import { onScrollEndOfPage } from "./js/listeners/onScrollEndOfPage";
import { refs } from "./js/refs-elements";

refs.form.addEventListener('submit', onFormSubmit);
window.addEventListener('scroll', onScrollEndOfPage);

