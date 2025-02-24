let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', function(){
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
})

const slides = document.querySelectorAll('.new__item');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');

let currentSlideIndex = 0;

function updateButtons() {
  prevButton.disabled = currentSlideIndex === 0;
  nextButton.disabled = currentSlideIndex === slides.length - 1;
}

function showSlide(i, saveState = true) {
  slides.forEach(slide =>
    slide.classList.remove('new__item--action'));

    slides[i].classList.add('new__item--action');
    currentSlideIndex = i;
    updateButtons();

    if(saveState) {
      history.pushState({slideIndex: i}, '', null);
    }

}

function nextSlide() {
  const nextIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

