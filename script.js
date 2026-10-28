const menu = document.querySelector('#menu');
const nav = document.querySelector('#navigation');
function closeMenu() {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Abrir menu');
}
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); }
});
window.matchMedia('(min-width:761px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-button').addEventListener('click', () => {
  document.querySelector('#contact-status').hidden = false;
});
