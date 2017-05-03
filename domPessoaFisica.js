function main() {
  var btn = document.querySelector("#imprimir");
  var btn2 = document.querySelector("#confirma");
  btn.addEventListener("click", changeCSS);
  btn2.addEventListener("click", confirma);
}

function changeCSS() {
  var lnk = document.querySelector("link");
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', "estiloPessoaFisicaPrint.css" );
  var head = document.querySelector("head");
  head.appendChild(lnk);
}

function confirma() {
  document.querySelector("#botao").style.display = 'none';
  window.print();
}

function mascara(t, mask) {
  var i = t.value.length;
  var saida = mask.substring(1,0);
  var texto = mask.substring(i);
  if (texto.substring(0, 1) != saida) {
    t.value += texto.substring(0, 1);
  }
}

window.addEventListener("load", main);
