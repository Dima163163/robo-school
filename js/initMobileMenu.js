export const initMobileMenu = () => {
  const buregerBtn = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.mobile-menu');

  buregerBtn.addEventListener('click', () => {
    buregerBtn.classList.toggle('header__burger_active');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('body_off-scroll')
  })
}