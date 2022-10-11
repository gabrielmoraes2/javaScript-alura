var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = document.querySelector(".info-peso");
var tdAltura = document.querySelector(".info-altura");
var tdNome = document.querySelector(".info-nome");
var tdImc = document.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
var nome = tdNome.textContent;

if(peso < 1){
    console.log("peso invalido")
}else if(peso > 700){

    console.log("peso invalido")

}else{

    var imc = peso / (altura * altura);

}


console.log("Nome: " + nome);
console.log("Peso: " + peso );
console.log("Altura: " + altura);

tdImc.textContent = imc;

