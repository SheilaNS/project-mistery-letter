const botaoCriarCarta = document.getElementById('criar-carta'); // button
const textoCarta = document.getElementById('carta-texto'); // input
const textoGerado = document.getElementById('carta-gerada'); // p
const carta = textoGerado.childNodes;
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function escolheIndice(array) {
  const tamanhoArray = array.length;
  const indiceEscolhido = Math.floor(Math.random() * tamanhoArray);
  return array[indiceEscolhido];
}

function escolheLista(param) {
  param.classList.add(escolheIndice(estilo));
  param.classList.add(escolheIndice(tamanho));
  param.classList.add(escolheIndice(rotacao));
  param.classList.add(escolheIndice(inclinacao));
}

function resetaCarta() {
  for (let i = carta.length; i > 0; i -= 1) {
    if (textoGerado.childNodes) {
      textoGerado.removeChild(textoGerado.firstChild);
    }
  }
}

/* function escolheDeNovo() {

}
 */
function geraCarta() {
  resetaCarta();
  let palavras = [];
  palavras = textoCarta.value.split(' ');
  for (let i = 0; i < palavras.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = palavras[i];
    escolheLista(span);
    // span.addEventListener('click', escolheDeNovo);
    textoGerado.appendChild(span);
  }
}

function verificaInput() {
  if (textoCarta.value !== ' ') {
    geraCarta();
  } else {
    resetaCarta();
    const span = document.createElement('span');
    span.innerText = 'Por favor, digite o conteúdo da carta.';
    textoGerado.appendChild(span);
  }
}

botaoCriarCarta.addEventListener('click', verificaInput);
