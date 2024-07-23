//Capturando o submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputMeuNome = e.target.querySelector('#seuNome').value;
  const inputNomeParceiro = e.target.querySelector('#nomeParceiro').value;

  const min = 1;
  const max = 99;

  const calcAmor = random(min, max);

  const msg = `${inputMeuNome} e ${inputNomeParceiro} têm ${calcAmor}% de Compatibilidade`;
  setResultado(msg);
});

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

function setResultado(msg) {
  const restultado = document.querySelector('#resultado');
  restultado.innerHTML = `<p>${msg}</p>`;
}