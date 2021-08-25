document.querySelector('.burger').addEventListener('click', (e) => {
  document.body.classList.toggle('_lock');
  e.currentTarget.classList.toggle('_active');
  document.querySelector('.header').classList.toggle('_active');
});
