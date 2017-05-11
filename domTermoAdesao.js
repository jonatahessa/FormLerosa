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

			document.getElementById('data').value = dataFormat;
  }

  window.addEventListener("load", main);
