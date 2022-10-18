var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//mostrando o integrante para calculo de IMC
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  console.log(pacientes[i]);

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdNome = paciente.querySelector(".info-nome");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  var nome = tdNome.textContent;

  var pesoEhValido = validaPeso(peso);
  var alturaEhValido = validaAltura(altura);

  //replicando codigo para todos os membros da tabela
  if (!pesoEhValido) {
    console.log("peso invalido");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";
  }

  if (!alturaEhValido) {
    console.log("Altura Inválida");
    alturaEhValido = false;
    tdAltura.textContent = "Altura Inválida";
  }

  if (pesoEhValido && alturaEhValido) {
    var imc = calculaImc(peso,altura)
    tdImc.textContent = imc;
  }
}

//validação de paciente

function validaPeso(peso) {
  if (peso > 0 && peso < 1000) {
      return true;
  } else {
      return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura <= 3.00) {
      return true;
  } else {
      return false;
  }
}


//criando função

function calculaImc(peso,altura){
  var imc = 0;

  imc = peso/(altura*altura);

  return imc.toFixed(2);
}
