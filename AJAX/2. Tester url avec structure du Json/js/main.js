btnBurger = document.getElementById('navi-toggle');
menu = document.getElementById('navi-menu');
btnBurger.addEventListener('click', () => {  
  menu.classList.toggle('open');
});