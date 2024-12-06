export const initModal = () => {
  console.log('Modal');
  const modalOverlay = document.querySelector('.overlay');
  const modalOpenBtn = document.querySelectorAll('.slide__btn');
  const treanerItems = document.querySelector('.trainers-section__slider');
  const btnCloseModal = document.querySelector('.modal_btn')

  treanerItems.addEventListener('click', (e) => {
    const target = e.target;
    if(target.closest('.slide__btn')) {
      modalOverlay.classList.add('overlay_active')
      document.body.style = 'overflow: hidden; height: 100vh'
    }
  })

  btnCloseModal.addEventListener('click', () => {
    modalOverlay.classList.remove('overlay_active')
    document.body.style = ''
  })
}