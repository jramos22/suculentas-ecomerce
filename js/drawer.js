const carrito = document.getElementById('drawer--view');
const carritoMovil = document.getElementById('drawer--movil');
const cierre = document.getElementById('drawer--close');

function openNave() {
  document.getElementById('drawer--js').classList.remove('drawer--close');
  document.getElementById('drawer--js').classList.add('drawer--open');
}

function closeNave() {
  document.getElementById('drawer--js').classList.remove('drawer--open');
  document.getElementById('drawer--js').classList.add('drawer--close');
}

carrito.addEventListener('click', (e) => {
  e.preventDefault();
  openNave();
});

carritoMovil.addEventListener('click', (e) => {
  e.preventDefault();
  openNave();
});

cierre.addEventListener('click', (e) => {
  e.preventDefault();
  closeNave();
});
