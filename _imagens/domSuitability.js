function main() {
  inserirDataAtual();
}

function inserirDataAtual(){
			var momentoAtual = new Date();

			var vdia = momentoAtual.getDate();
			var vmes = momentoAtual.getMonth() + 1;
			var vano = momentoAtual.getFullYear();

			if (vdia < 10){
          vdia = "0" + vdia;
        }
			if (vmes < 10){
          vmes = "0" + vmes;
        }

			dataFormat = vdia + "/" + vmes + "/" + vano;

			document.querySelector("#inputdata").value = dataFormat;
  }

  function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i);
    if (texto.substring(0, 1) != saida) {
      t.value += texto.substring(0, 1);
    }
  }

  window.addEventListener("load", main);
