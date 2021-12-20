const botaoCriarCarta = document.getElementById('criar-carta'); // button
const textoCarta = document.getElementById('carta-texto'); // input
const textoGerado = document.getElementById('carta-gerada'); // p
const carta = textoGerado.childNodes;

function resetaCarta() {
  for (let i = carta.length; i > 0; i -= 1) {
    if (textoGerado.childNodes) {
      textoGerado.removeChild(textoGerado.firstChild);
    }
  }
}

function geraCarta() {
  resetaCarta();
  let palavras = [];
  palavras = textoCarta.value.split(' ');
  for (let i = 0; i < palavras.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = palavras[i];
    textoGerado.appendChild(span);
  }
}

botaoCriarCarta.addEventListener('click', geraCarta);
