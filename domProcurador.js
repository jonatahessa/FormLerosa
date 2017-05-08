function main() {
  var btn = document.querySelector('#botao');
  btn.addEventListener("click", validar);
}

function validar() {
  var camposinvalidos = [];
  var camposvalidos = [];
  var checks = [];
  checks = document.querySelector('input[name=poderes]');
  var i = 0;
  var j = 0;
  var erro = 0;
  var razaosocial = document.querySelector('#camporazao');
  var cnpj = document.querySelector('#campocnpj');
  var nome = document.querySelector('#campoprocurador');
  var cpf = document.querySelector('#campocpf');
  var tipodoc = document.querySelector('#selectdocumento');
  var numdoc = document.querySelector('#camponumerodoc');
  var datanasc = document.querySelector('#campodatanasc');
  var endereco = document.querySelector('#campoendereco');
  var numero = document.querySelector('#camponumero');
  var cep = document.querySelector('#campocep');
  var bairro = document.querySelector('#campobairro');
  var cidade = document.querySelector('#campocidade');
  var estado = document.querySelector('#campoestado');
  var telefone = document.querySelector('#campotelefone');
  var email = document.querySelector('#campoemail');
  var local = document.querySelector('#local');

  if (razaosocial.value == '') {
    camposinvalidos[i] = "#camporazao";
    i++;
  } else {
    camposvalidos[j] = "#camporazao";
    j++;
  }
  if (cnpj.value == '') {
    camposinvalidos[i] = "#campocnpj";
    i++;
  } else {
    camposvalidos[j] = "#campocnpj";
    j++;
  }
  if (validacheck() == false) {
    erro = 1;
  }
  if (nome.value == '') {
    camposinvalidos[i] = "#campoprocurador";
    i++;
  } else {
    camposvalidos[j] = "#campoprocurador";
    j++;
  }
  if (cpf.value == '') {
    camposinvalidos[i] = "#campocpf";
    i++;
  } else {
    camposvalidos[j] = "#campocpf";
    j++;
  }
  if (tipodoc.value == '') {
    camposinvalidos[i] = "#selectdocumento";
    i++;
  } else {
    camposvalidos[j] = "#selectdocumento";
    j++;
  }
  if (numdoc.value == '') {
    camposinvalidos[i] = "#camponumerodoc";
    i++;
  } else {
    camposvalidos[j] = "#camponumerodoc";
    j++;
  }
  if (endereco.value == '') {
    camposinvalidos[i] = "#campoendereco";
    i++;
  } else {
    camposvalidos[j] = "#campoendereco";
    j++;
  }
  if (numero.value == '' || numero.value < 1) {
    camposinvalidos[i] = "#camponumero";
    i++;
  } else {
    camposvalidos[j] = "#camponumero";
    j++;
  }
  if (datanasc.value == '') {
    camposinvalidos[i] = "#campodatanasc";
    i++;
  } else {
    camposvalidos[j] = "#campodatanasc";
    j++;
  }
  if (cep.value == '') {
    camposinvalidos[i] = "#campocep";
    i++;
  } else {
    camposvalidos[j] = "#campocep";
    j++;
  }
  if (bairro.value == '') {
    camposinvalidos[i] = "#campobairro";
    i++;
  } else {
    camposvalidos[j] = "#campobairro";
    j++;
  }
  if (cidade.value == '') {
    camposinvalidos[i] = "#campocidade";
    i++;
  } else {
    camposvalidos[j] = "#campocidade";
    j++;
  }
  if (estado.value == '') {
    camposinvalidos[i] = "#campoestado";
    i++;
  } else {
    camposvalidos[j] = "#campoestado";
    j++;
  }
  if (telefone.value == '') {
    camposinvalidos[i] = "#campotelefone";
    i++;
  } else {
    camposvalidos[j] = "#campotelefone";
    j++;
  }
  if (validaemail(email.value) == false) {
    camposinvalidos[i] = "#campoemail";
    i++;
  } else {
    camposvalidos[j] = "#campoemail";
    j++;
  }
  if (local.value == '') {
    camposinvalidos[i] = "#local";
    i++;
  } else {
    camposvalidos[j] = "#local";
    j++;
  }

  if (i > 0 && i < 15 ) {
    alert("Verifique os campos em vermelho!");
    destacacampos(camposinvalidos);
    if (erro != 0){
      destacapoderes();
    } else {
      retornapoderes();
    }
    if (j != 0) {
      retornacampos(camposvalidos);
    }
  } else {
    if (erro != 0 && i < 15){
      alert("Verifique os campos em vermelho!");
      destacacampos(camposinvalidos);
      retornacampos(camposvalidos);
      destacapoderes();
      return false;
    }
    retornacampos(camposvalidos);
    retornacampos(camposinvalidos);
    retornapoderes();
    inserirDataAtual();
    remover();
    assinaturas();
    window.print();
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

			document.getElementById('data').value = dataFormat;
  }

function assinaturas() {
  document.getElementById('assinaturas').style.display = "block";
  document.getElementById('data').style.display = "inline";
  document.getElementById('labeldata').style.display = "inline";
}

function remover() {
  document.querySelector(".btn").style.display = "none";
}

function validaemail(email) {
  var valida = false;
  var usuario = email.substring(0, email.indexOf("@"));
  var dominio = email.substring(email.indexOf("@") + 1, email.length);

  if ((usuario.length >= 1) &&
    (dominio.length >= 3) &&
    (usuario.search("@") == -1) &&
    (dominio.search("@") == -1) &&
    (usuario.search(" ") == -1) &&
    (dominio.search(" ") == -1) &&
    (dominio.search(".") != -1) &&
    (dominio.indexOf(".") >= 1) &&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
    valida = true;
  } else {
    valida = false;
  }
  return valida;
}


function mascara(t, mask) {
  var i = t.value.length;
  var saida = mask.substring(1, 0);
  var texto = mask.substring(i);
  if (texto.substring(0, 1) != saida) {
    t.value += texto.substring(0, 1);
  }
}

function validacheck() {
  var algumChecado = false;
  var checks = document.getElementsByName('poderes');
  for (i = 0; i < checks.length; i++) {
    if (checks[i].checked == true) {
      algumChecado = true;
      return algumChecado;
    }
  }
  if (!algumChecado) {
    algumChecado = false;
    return algumChecado;
  }
  return true;
}

function destacacampos(camposinvalidos) {
  for (var i = 0; i < camposinvalidos.length; i++) {
    document.querySelector(camposinvalidos[i]).className = 'camposdestacados';
  }
}

function retornacampos(camposvalidos) {
  for (var i = 0; i < camposvalidos.length; i++) {
    document.querySelector(camposvalidos[i]).className = 'campos';
  }
}

function destacapoderes() {
  var pintar = document.querySelector('#checkpoderes');
  pintar.style.color = 'red';
}

function retornapoderes() {
  var pintar = document.querySelector('#checkpoderes');
  pintar.style.color = 'black';
}

window.addEventListener("load", main);
