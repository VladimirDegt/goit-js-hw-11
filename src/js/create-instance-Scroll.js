import InfiniteScroll from "infinite-scroll";

import { refs } from './refs-elements';

let infScroll = new InfiniteScroll( refs.gallery, {
  // options
  path: '.pagination__next',
  append: '.post',
  history: false,
});