var pontos = 0;


function main() {
  inserirDataAtual();
  var imprimir = document.querySelector('#imprimir');
  var confirma = document.querySelector('#confirma');
  imprimir.addEventListener("click", changeCSS);
  confirma.addEventListener("click", confirmar)
  var inputs = document.getElementsByClassName('radios');
  for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("click", resultado);
  }
}
function mascara(t, mask) {
  var i = t.value.length;
  var saida = mask.substring(1, 0);
  var texto = mask.substring(i);
  if (texto.substring(0, 1) != saida) {
    t.value += texto.substring(0, 1);
  }
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

			document.getElementById('inputdata').value = dataFormat;
  }

  function verifica() {
    var soma = 0;
    var radio = document.getElementsByClassName('radios');
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked == true) {
        var valor = parseInt(radio[i].value);
        soma += valor;
      }
    }
    pontos = soma;
  }

  function resultado() {
    var perfil;
    if (pontos < 13) {
      perfil = "Conservador";
    } else if (pontos > 12 && pontos < 22) {
      perfil = "Moderado";
    } else if (pontos > 21 && pontos < 31) {
      perfil = "Arrojado";
    } else {
      perfil = "Agressivo";
    }
    document.getElementById('result').value = perfil;
    document.getElementById('numeropontos').value = pontos;
  }

  function changeCSS() {
    var lnk = document.querySelector("link");
    lnk.setAttribute('rel', "stylesheet" );
    lnk.setAttribute('href', "estiloSuitabilityPrint.css" );
    var head = document.querySelector("head");
    head.appendChild(lnk);
  }

  function confirmar() {
    document.querySelector("#confirma").style.display = 'none';
    window.print();
  }

window.addEventListener("load", main);
