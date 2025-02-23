const rangeSlider = document.querySelector('.range__slider');
const inputMin = document.querySelector('.range__input--min');
const inputMax = document.querySelector('.range__input--max');
const inputs = [inputMin, inputMax];

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    range: {
      'min': 0,
      'max': 1000
    }
  });
}

rangeSlider.noUiSlider.on('update', (values, handle) => {
  inputs[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (i, value) => {
  let arr = [null, null];
  arr[i] = value;
  rangeSlider.noUiSlider.set(arr);
};

inputs.forEach((element, index) => {
  element.addEventListener('change', (e) => {
    setRangeSlider(index, e.currentTarget.value);
  });
});


