const cardUpdates = document.querySelector('.content-cards');

function addCard(info) {
  for (let i = 9; i < 15; i += 1) {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('h3');
    const price = document.createElement('p');
    const offer = document.createElement('p');
    const star = document.createElement('img');
    const links = document.createElement('a');
    card.setAttribute('class', 'card');
    img.setAttribute('src', `img/${info[i].id}.png`);
    name.setAttribute('class', 'titleCard');
    name.innerHTML = info[i].nameProduct;
    price.setAttribute('class', 'price');
    price.innerHTML = info[i].priceProduct;
    offer.setAttribute('class', 'offer');
    offer.innerHTML = info[i].offersProduct;
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
    card.appendChild(offer);
    cardUpdates.appendChild(card);
  }
}

const urlApi = 'https://604fd24fc20143001744dd3e.mockapi.io/Products';

fetch(urlApi)
  .then((response) => response.json())
  .then((data) => {
    addCard(data);
  });
