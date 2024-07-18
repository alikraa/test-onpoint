const listItemsContent = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
];

const partString = '0';
const increment = 1;
const count = 3;
const defaultValue = 0;
const empty = '';

let start = 0;
let end = 3;

const list = document.querySelector('.list');

const arrowButtons = document.querySelectorAll('.pagination_button-arrow');
const leftCircle = document.getElementById('left');
const rightCircle = document.getElementById('right');

const openPopUpButton = document.querySelector('.slider-3__cards_button');
const popUpWrapper = document.querySelector('.slider-3__pop-up-wrapper');
const closePopUpButton = document.querySelector(
  '.slider-3__pop-up_content_close-button'
);
const openPopUpClass = 'wrapper-open';

openPopUpButton.addEventListener('click', () => {
  popUpWrapper.classList.add(openPopUpClass);

  openPopUpButton.classList.add('button-hidden');
});

closePopUpButton.addEventListener('click', () => {
  popUpWrapper.classList.remove(openPopUpClass);

  openPopUpButton.classList.remove('button-hidden');
});

arrowButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const currentList = createElements(listItemsContent);

    if (btn.classList.contains('right')) {
      if (currentList.length === end) {
        start = currentList.length - count;
        end = currentList.length;
      } else {
        start = start + count;
        end = end + count;
      }

      if (leftCircle.classList.contains('active')) {
        rightCircle.classList.add('active');
        leftCircle.classList.remove('active');
      }
    } else {
      if (start <= 0) return (start = defaultValue);
      if (end <= 3) return (end = count);

      start = start - count;
      end = end - count;

      if (rightCircle.classList.contains('active')) {
        leftCircle.classList.add('active');
        rightCircle.classList.remove('active');
      }
    }

    renderList();
  });
});

function createElements(arr) {
  const elements = [];

  arr.forEach((elem, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');

    span.textContent = partString + (index + increment);
    li.textContent = elem;

    li.prepend(span);

    elements.push(li);
  });

  return elements;
}

function sliceList(arr, start, end) {
  return arr.slice(start, end);
}

function renderList() {
  const currentList = createElements(listItemsContent);

  list.innerHTML = empty;

  const slicedList = sliceList(currentList, start, end);
  slicedList.forEach((elem) => list.append(elem));
}

export { defaultValue, increment, renderList };
