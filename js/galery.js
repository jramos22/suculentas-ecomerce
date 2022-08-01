const mini = document.querySelectorAll('.miniatura');
const miniMovil = document.querySelectorAll('.mini');
const bigImage = document.getElementById('big-image');

// Funcion principal de la Galeria
for (let i = 0; i < mini.length; i += 1) {
  mini[i].addEventListener('click', (event) => {
    event.preventDefault();
    const url = event.currentTarget.getAttribute('src');
    bigImage.src = `${url}`;
  });
}

const bigMobile = document.getElementById('big-mobile');

// Funcion principal de la Galeria
for (let i = 0; i < miniMovil.length; i += 1) {
  miniMovil[i].addEventListener('click', (event) => {
    event.preventDefault();
    const urlmobile = event.currentTarget.getAttribute('src');
    bigMobile.src = `${urlmobile}`;
  });
}
