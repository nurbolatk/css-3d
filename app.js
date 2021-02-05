const btnOpenBox = document.querySelector('.open-box')
const cube = document.querySelector('.cube')

btnOpenBox.addEventListener('click', () => {
  cube.classList.toggle('open')
})
