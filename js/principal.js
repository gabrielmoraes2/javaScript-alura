var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//mostrando o integrante para calculo de IMC
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

  //replicando codigo para todos os membros da tabela
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

//adicionando membro a tabela
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

 var pacienteTr = document.createElement("tr")
 var nomeTd= document.createElement("td")
 var pesoTd= document.createElement("td")
 var alturaTd= document.createElement("td")
 var gorduraTd= document.createElement("td")
 var imcTd= document.createElement("td")

 nomeTd.textContent = nome;
 pesoTd.textContent = peso;
 alturaTd.textContent = altura;
 gorduraTd.textContent = gordura;


 pacienteTr.appendChild(nomeTd);
 pacienteTr.appendChild(pesoTd);
 pacienteTr.appendChild(alturaTd);
 pacienteTr.appendChild(gorduraTd);

 var tabela = document.querySelector("#tabela-pacientes");

 tabela.appendChild(pacienteTr);
});

