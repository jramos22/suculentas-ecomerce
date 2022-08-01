// se establecen las variables
const adds = document.getElementById('addjs');
const addsmovil = document.getElementById('addjs-responsive');
const info = document.querySelector('.list-container');
const nombre = document.querySelector('h2');
const img = document.querySelectorAll('img')[9];
const precio = document.getElementById('price');
let ident = img.getAttribute('src');
const open = document.getElementById('open');
const alertContainer = document.getElementById('alert__Container');
const alertResponsive = document.getElementById('alert__Container-responsive');

// se crea una funcion que es encargada de hacer un post a la Api
function pushinfo(infopush) {
  fetch('https://604fd24fc20143001744dd3e.mockapi.io/Carrito', {
    method: 'POST',
    body: JSON.stringify(infopush),
    headers: {
      "Content-Type": "application/json"
    },
  })
  // si el post se efectua de forma exitosa se hace un modal
  .then((response) => {
    if (response.ok) {
      alertContainer.innerHTML = `
    <div class="alert alert--product">
      <img src="img/check.png" alt="check">
      <h2>Se agrego su producto</h2>
      <button class=" button-principal details" id="close">ok</button>
    </div>`;
  alertContainer.classList.add('show');
  const close = document.getElementById('close');

  close.addEventListener('click', () => {
    alertContainer.classList.remove('show');
    alertResponsive.classList.remove('show');
  });
// se crea el movil
  alertResponsive.innerHTML = `
  <div class="alert alert--movil alert--product">
    <img src="img/check.png" alt="check">
    <h2>Se agrego su producto</h2>
    <button class=" button-principal responsive" id="close-responsive">ok</button>
  </div>`;
alertResponsive.classList.add('show');
const closerespon = document.getElementById('close-responsive');

closerespon.addEventListener('click', () => {
  alertResponsive.classList.remove('show');
  alertContainer.classList.remove('show');
});
    }
    // esta funcion esta funcion esta definida en shopping.js y es llamada aca para refrescar el DOM
    call();
  });
}
// al darle click al boton agregar al carrito se toma la info del DOM y se hace post a la API
adds.addEventListener('click', (event) => {
  event.preventDefault();

  if (ident.length === 9) {
    ident = ident.substring(4, 5);
  } else if (ident.length === 10) {
    ident = ident.substring(4, 6);
  }

  const infopush = {
    'img': ident,
    'name': nombre.textContent,
    'priceProduct': precio.textContent
  }
  pushinfo(infopush);
});

// Movil
addsmovil.addEventListener('click', (event) => {
  event.preventDefault();

  if (ident.length === 9) {
    ident = ident.substring(4, 5);
  } else if (ident.length === 10) {
    ident = ident.substring(4, 6);
  }

  const infopush = {
    'img': ident,
    'name': nombre.textContent,
    'priceProduct': precio.textContent
  }
  pushinfo(infopush);
});
