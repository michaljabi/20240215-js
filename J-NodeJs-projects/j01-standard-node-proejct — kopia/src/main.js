import { shoutHelloBanner, shoutActionBanner, shoutSimpleBanner } from './banners.js';
import lo from 'lodash'

shoutHelloBanner();
shoutActionBanner();
shoutSimpleBanner();


const numbers = [2, 3, 23];

console.log(lo.last(numbers))
