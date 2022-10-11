var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  console.log(pacientes[i]);

  var paciente = pacientes[i]

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdNome = paciente.querySelector(".info-nome");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  var nome = tdNome.textContent;

  var pesoEhValido = true;
  var alturaEhValido = true;

  if (peso < 1 || peso > 800) {
    console.log("peso invalido");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";

  }

  if (altura < 0 || altura > 3.0) {
    console.log("Altura Inválida");
    alturaEhValido = false;
    tdAltura.textContent = "Altura Inválida";
  }

  if (pesoEhValido && alturaEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}
