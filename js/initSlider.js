export const initSlider = () => {
  const sliderList = document.querySelector('.trainers-section__slider');
  const btnPrev = document.querySelector('.button-slide__prev');
  const btnNext = document.querySelector('.button-slide__next');
  const sliderScrollBar = document.querySelector('.slider-scrollbar');
  const scrollBarThumb = document.querySelector('.scrollbar-thumb');

  const maxScroollLeft = sliderList.scrollWidth - sliderList.clientWidth;
  
  scrollBarThumb.addEventListener('mousedown', (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollBarThumb.offsetLeft;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - scrollBarThumb.offsetWidth;

      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScroollLeft;

      scrollBarThumb.computedStyleMap.left = `${newThumbPosition}px`;
      sliderList.scrollLeft = scrollPosition;
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  })

  const updateScrollPosition = () => {
    const scrollPosition = sliderList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScroollLeft) * (sliderScrollBar.clientWidth - scrollBarThumb.offsetWidth);
    scrollBarThumb.style.left = `${thumbPosition}px`;
  }

  sliderList.addEventListener('scroll' , updateScrollPosition)

  btnNext.addEventListener('click', () => {
    const scrollLeft = (sliderList.scrollWidth - sliderList.clientWidth) / 2
      sliderList.scrollBy({left: scrollLeft, behavior: 'smooth'})
  })
  btnPrev.addEventListener('click', () => {
    const scrollRight = (sliderList.scrollWidth - sliderList.clientWidth) / 2
    sliderList.scrollBy({left: -scrollRight, behavior: 'smooth'})
  })
}