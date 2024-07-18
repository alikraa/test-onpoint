import { defaultValue, increment } from './pop-up';

const sliderContent = document.querySelector('.slider__content_slides');
const sliderContentSize = sliderContent.childElementCount;
const sliderContentWidth = sliderContent.getBoundingClientRect().width;
const slides = sliderContent.children;

const pinkSpermImg = document.querySelectorAll('.slide-2__pink-sperm');
const firstSlideButton = document.querySelector(
  '.slide-1__text-content_button'
);
const homePage = document.querySelector('.slider__global');

const minShiftValue = 20;
let currentSlide = defaultValue;
let x = defaultValue;
let isChanged = false;
let clickX = defaultValue;
let startX = defaultValue;

firstSlideButton.addEventListener('click', () => {
  x = Math.min(-sliderContentWidth);
  currentSlide = currentSlide + 1;

  setPosition(x);
  setTransition();
  setParams();

  pinkSpermImg.forEach((elem) =>
    elem.classList.add('slide-2__pink-sperm-active')
  );
});

homePage.addEventListener('click', () => {
  currentSlide = defaultValue;

  setParams();
  setTransition();

  pinkSpermImg.forEach((elem) =>
    elem.classList.remove('slide-2__pink-sperm-active')
  );
});

function setParams() {
  x = -currentSlide * sliderContentWidth;
  setPosition(x);

  sliderContent.style.width = `${sliderContentSize * sliderContentWidth}px`;

  Array.from(slides).forEach((slide) => {
    slide.style.width = `${sliderContentWidth}px`;
  });
}

function setEvents() {
  sliderContent.addEventListener('pointerdown', start);
  window.addEventListener('pointerup', stop);

  setParams();
}

function start(evt) {
  isChanged = false;
  clickX = evt.pageX;
  startX = x;

  removeTransition();
  window.addEventListener('pointermove', moving);
}

function stop() {
  window.removeEventListener('pointermove', moving);

  x = -currentSlide * sliderContentWidth;
  setPosition(x);

  setTransition();
  setEvents();
}

function moving(evt) {
  const shiftValue = evt.pageX - clickX;

  x = Math.min(startX + shiftValue);
  setPosition(x);

  if (
    shiftValue > minShiftValue &&
    shiftValue > defaultValue &&
    !isChanged &&
    currentSlide > defaultValue
  ) {
    isChanged = true;
    currentSlide = currentSlide - increment;
  }

  if (
    shiftValue < -minShiftValue &&
    shiftValue < defaultValue &&
    !isChanged &&
    currentSlide < sliderContentSize - increment
  ) {
    isChanged = true;
    currentSlide = currentSlide + increment;
  }
}

function setTransition() {
  sliderContent.style.transition = `all 0.25s ease`;
}

function removeTransition() {
  sliderContent.style.transition = `all 0s ease`;
}

function setPosition(value) {
  sliderContent.style.transform = `translateX(${value}px)`;
}

export { setEvents };
