let btnItems = document.querySelectorAll(".item .btn-item");

for (let i = 0; i < btnItems.length; i++) {
  btnItems[i].addEventListener('click', (e)=>{
    let btn = e.target;
    if (btn.className =="btn-item active") {
      removeClass();
    }else{
      removeClass();
      btn.classList.add('active');
    }
  })
}
function removeClass() {
  for (let i = 0; i < btnItems.length; i++) {
    btnItems[i].classList.remove('active');
  }
}
