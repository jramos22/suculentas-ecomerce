const buttonsWrapper = document.querySelector('.map');
const slides = document.querySelector('.inner');

buttonsWrapper.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove('active'));
    if (e.target.classList.contains('first')) {
      slides.style.transform = 'translateX(-0%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('second')) {
      slides.style.transform = 'translateX(-33.33333333333333%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('third')) {
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('active');
    }
  }
});

const buttonsMovil = document.querySelector('.map--Movil');
const slidesMovil = document.querySelector('.inner--Movil');

buttonsMovil.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    Array.from(buttonsMovil.children).forEach(item =>
      item.classList.remove('active'));
    if (e.target.classList.contains('first')) {
      slidesMovil.style.transform = 'translateX(-0%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('second')) {
      slidesMovil.style.transform = 'translateX(-32%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('third')) {
      slidesMovil.style.transform = 'translatex(-66%)';
      e.target.classList.add('active');
    }
  }
});
