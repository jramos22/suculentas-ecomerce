// se crea un array para guardar la info de la Api
let inforCarrito = [];
const actualizar = document.getElementById('addjs');
// se crea la funcion encargada de eliminar los productos del DOM y de la Api
function deleteproduct(id) {
  fetch(`https://604fd24fc20143001744dd3e.mockapi.io/Carrito/${id}`, {
    method: 'DELETE'
  })
  .then((response) => {
    if (response.ok) {
      // si se elimina correctamente el producto se llama a call para refrescar el DOM
      call();
    }
  })
}
// se crea los productos con su info
function contendor(cardinfo) {
  const contentCart = document.getElementById('shoppingCart');
  const divsubpadre = document.createElement('div');
  divsubpadre.setAttribute('class', 'shoppingCart__content clearfix');
  const shoppingCartcontentimg = document.createElement('div');
  shoppingCartcontentimg.setAttribute('class', 'shoppingCart__content--img');
  const img = document.createElement('img');
  img.setAttribute('src', `img/${cardinfo.img}.png`);
  img.setAttribute('alt', `${cardinfo.name}`);
  const shoppingCartcontenttitle = document.createElement('div');
  shoppingCartcontenttitle.setAttribute('class', 'shoppingCart__content--title');
  const parrafo = document.createElement('p');
  parrafo.innerHTML = `${cardinfo.name}`;
  const shoppingCartcontentinfo = document.createElement('div');
  shoppingCartcontentinfo.setAttribute('class', 'shoppingCart__content--info');
  const parrafoinfo = document.createElement('p');
  parrafoinfo.setAttribute('class','info--amount');
  parrafoinfo.innerHTML = '1';
  const parrafocost = document.createElement('p');
  parrafocost.setAttribute('class','info--cost');
  parrafocost.innerHTML = `${cardinfo.priceProduct}`;
  const boton = document.createElement('button');
  boton.setAttribute('id', `delete-${cardinfo.id}`);
  boton.setAttribute('class', 'info--button');
  boton.dataset.taskId = cardinfo.id;
  boton.innerHTML = 'X';

  shoppingCartcontentimg.appendChild(img);
  divsubpadre.appendChild(shoppingCartcontentimg);
  shoppingCartcontenttitle.appendChild(parrafo);
  divsubpadre.appendChild(shoppingCartcontenttitle);
  shoppingCartcontentinfo.appendChild(parrafoinfo);
  shoppingCartcontentinfo.appendChild(parrafocost);
  shoppingCartcontentinfo.appendChild(boton);
  divsubpadre.appendChild(shoppingCartcontentinfo);
  contentCart.appendChild(divsubpadre);
  boton.addEventListener('click', (event) => {
    const taskId = event.currentTarget.dataset.taskId;
    deleteproduct(taskId);
    event.currentTarget.parentNode.parentNode.remove();
  });
}
// se crea call para hacer un fetch de tipo get para obtener informacion del Api
function call(){
fetch('https://604fd24fc20143001744dd3e.mockapi.io/Carrito')
  .then((response) => response.json())
  .then((data) => {
    inforCarrito = data;
    const contentCart = document.getElementById('shoppingCart');
    contentCart.innerHTML = '';
    for (let i = 0; i < inforCarrito.length; i += 1) {
      // se llama a la funcion que imprime en el DOM
      contendor(inforCarrito[i], i);
    }
  });
}
call();
