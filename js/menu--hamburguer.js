const menu = document.getElementById('menu--movil');
const cierreMenu = document.getElementById('menu--close');

function openMenu() {
  document.getElementById('menu--js').classList.remove('menu--close');
  document.getElementById('menu--js').classList.add('menu--open');
}

function closeMenu() {
  document.getElementById('menu--js').classList.remove('menu--open');
  document.getElementById('menu--js').classList.add('menu--close');
}

menu.addEventListener('click', (e) => {
  e.preventDefault();
  openMenu();
});

cierreMenu.addEventListener('click', (e) => {
  e.preventDefault();
  closeMenu();
});
