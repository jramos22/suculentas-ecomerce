const urlApi = 'https://604fd24fc20143001744dd3e.mockapi.io/Products';
const cardUpdates = document.querySelector('.content-cards');
const filtro = document.querySelector('select');

function cardDoom(info) {
  cardUpdates.innerHTML = '';
  for (let i = 0; i < info.length; i += 1) {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('h3');
    const price = document.createElement('p');
    const star = document.createElement('img');
    const links = document.createElement('a');
    card.setAttribute('class', 'card');
    img.setAttribute('src', `img/${info[i].id}.png`);
    name.setAttribute('class', 'titleCard');
    name.innerHTML = `${info[i].nameProduct}`;
    price.setAttribute('class', 'price');
    price.innerHTML = `${info[i].priceProduct}`;
    star.setAttribute('src', 'img/estrellas.png');
    star.setAttribute('class', 'stars');
    links.setAttribute('class', 'button-principal button--margin');
    links.setAttribute('href', `${info[i].link}`);
    links.innerHTML = 'Ver Detalles';
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(star);
    card.appendChild(links);
    cardUpdates.appendChild(card);
  }
}

let products = [];
function addCard() {
  const myArray = [];
  for (let i = 0; i < 6; i += 1) {
    myArray.push(products[i]);
  }
  const currency = document.querySelector('select').value;
  if (currency === 'mayor precio') {
    cardDoom((myArray.sort((a, b) => b.priceProduct - a.priceProduct)));
  } else {
    cardDoom((myArray.sort((a, b) => a.priceProduct - b.priceProduct)));
  }
}

filtro.addEventListener('change', addCard);

fetch(urlApi)
  .then((response) => response.json())
  .then((data) => {
    products = data;
    addCard();
  });
