//adicionando membro a tabela
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  //extrai informações
  var paciente = obtempaciente(form);

  console.log(paciente);

  //cria paciente

  var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente);

  console.log(erros);
  if (erros.length > 0) {
    exibeMensagemErro(erros);
    return;
  }

  //adiciona paciente a tabela

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

//criando objeto paciente

function obtempaciente(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

//criando tr
function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");

  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

//criando td
function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

//validação de paciente

function validaPaciente(paciente) {
  var erros = [];

  if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");

  if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");

  if (paciente.nome.length == 0) erros.push("o nome não pode ser em branco");

  if (paciente.gordura.length == 0) erros.push("% de Gordura invalida");

  return erros;
}

function exibeMensagemErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
