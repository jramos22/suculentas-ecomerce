const open = document.getElementById('open');
const alertContainer = document.getElementById('alert__Container');

open.addEventListener('click', () => {
  alertContainer.innerHTML = `
    <div class="alert">
      <img src="../img/check.png" alt="">
      <h2>Datos enviados</h2>
      <button class=" button-principal details" id="close">ok</button>
    </div>`;
  alertContainer.classList.add('show');
  const close = document.getElementById('close');

  close.addEventListener('click', () => {
    alertContainer.classList.remove('show');
  });
});
