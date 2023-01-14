// Acessar a janela(navegador)
// Pegar o HTML todo
// Pegar botão
// Saber que está clicado no botão
// Pegar o elements
// Mover o elements

const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 10;

btnRight.addEventListener('click', function () {
  pixels = pixels + 10;
  elements.style = `transform: translateX(${pixels}px);`;
});

btnLeft.addEventListener('click', function () {
  pixels = pixels - 10;
  elements.style = `transform: translateX(${pixels}px);`;
});
