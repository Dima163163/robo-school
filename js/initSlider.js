export const initSlider = () => {
  const sliderList = document.querySelector('.trainers-section__slider');
  const btnPrev = document.querySelector('.button-slide__prev');
  const btnNext = document.querySelector('.button-slide__next');
  const sliderScrollBar = document.querySelector('.slider-scrollbar');
  const scrollBarThumb = document.querySelector('.scrollbar-thumb');
  const slide = document.querySelector('.slide')
  let slidePosition = 0;

  const maxScrollLeft = sliderList.scrollWidth - sliderList.clientWidth;
  
  scrollBarThumb.addEventListener('mousedown', (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollBarThumb.offsetLeft;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - scrollBarThumb.offsetWidth;
      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollBarThumb.style.left = `${boundedPosition}px`;
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
    const thumbPosition = Math.ceil((scrollPosition / maxScrollLeft) * (sliderScrollBar.clientWidth - scrollBarThumb.clientWidth));

    scrollBarThumb.style.left = `${thumbPosition}px`;
  }

  sliderList.addEventListener('scroll' , updateScrollPosition);

  const scrollSlide = (type) => {
    let styleSlide = window.getComputedStyle(slide, null);
    const marginRigth = parseInt(styleSlide.marginRight);
    const widthSlide = slide.clientWidth + marginRigth;

    if (type === 'next') {
      if (slidePosition < maxScrollLeft && (maxScrollLeft - slidePosition) > widthSlide && (maxScrollLeft - slidePosition) > 0) {
        slidePosition = slidePosition + widthSlide;;
      }
    }

    if (type === 'prev') {
      if (slidePosition > widthSlide && (slidePosition - widthSlide) > 0) {
        slidePosition = slidePosition - widthSlide;
      }
    }
  }

  btnNext.addEventListener('click', () => {
    scrollSlide('next')
    sliderList.scrollBy({left: slidePosition, behavior: 'smooth'})
  })
  btnPrev.addEventListener('click', () => {
    scrollSlide('prev')
    sliderList.scrollBy({left: -slidePosition, behavior: 'smooth'})
  })
}