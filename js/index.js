import { initMobileMenu } from './initMobileMenu.js';
import { initModal } from './initModal.js';
import { initSlider } from './initSlider.js';


const init = () => {
  initSlider();
  initModal();
  initMobileMenu();
}

init()