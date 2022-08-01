const slider = document.querySelector('#slider');
const sliderSection = document.querySelectorAll('.slider--section');
const sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector('#btn--left');
const btnRight = document.querySelector('#btn--right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moveright() {
  const sliderSectionFirst = document.querySelectorAll('.slider--section')[0];
  slider.style.marginLeft = '-200%';
  slider.style.transition = 'all 0.5s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = '-100%';
  }, 500);
}

function moveleft() {
  const sliderSection1 = document.querySelectorAll('.slider--section');
  const sliderSectionLast1 = sliderSection1[sliderSection1.length - 1];
  slider.style.marginLeft = '0%';
  slider.style.transition = 'all 0.5s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', sliderSectionLast1);
    slider.style.marginLeft = '-100%';
  }, 500);
}

btnRight.addEventListener('click', () => {
  moveright();
});

btnLeft.addEventListener('click', () => {
  moveleft();
});

setInterval(() => {
  moveleft();
}, 7000);
