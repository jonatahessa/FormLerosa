function main() {
  var btn = document.querySelector("[name='imprimir']");
  btn.addEventListener("click", imprimir);
}

function imprimir() {
  document.querySelector("[name='imprimir']").style.display = "none";
  document.getElementById('assinatura').style.display = "block";
  window.print();
}

window.addEventListener("load", main);
