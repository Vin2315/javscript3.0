const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  // Boucler sur tous items -> retirer la classe "is-active"
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  })