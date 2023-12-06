// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO NOME ---------- //
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

togglePopup(nomeInput, nomeLabel)

// Validar valor do input
nomeInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    nomeHelper.innerText = "Seu nome precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(nomeInput, nomeHelper)
    inputsCorretos.nome = false
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(nomeInput, nomeHelper);
    inputsCorretos.nome = true
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false
  }
})

// ---------- VALIDAÇÃO TELEFONE ---------- //
let telefoneInput = document.getElementById("telefone");
let telefoneLabel = document.querySelector('label[for="telefone"]');
let telefoneHelper = document.getElementById("telefone-helper");

togglePopup(telefoneInput, telefoneLabel);

telefoneInput.addEventListener("blur", (e) => {
  let valor = e.target.value

    if(valor.length >=10 && valor.length < 12){
      estilizarInputCorreto(telefoneInput, telefoneHelper);
      inputsCorretos.telefone = true
    }else{
      telefoneHelper.innerText = "O campo telefone deve conter 10 ou 11 números.";
      estilizarInputIncorreto(telefoneInput, telefoneHelper);
      inputsCorretos.telefone = false
  }})

// ---------- VALIDAÇÃO ASSUNTO ---------- //
let assuntoInput = document.getElementById("assunto");
let assuntoLabel = document.querySelector('label[for="assunto"]');
let assuntoHelper = document.getElementById("assunto-helper");

togglePopup(assuntoInput, telefoneLabel);

assuntoInput.addEventListener("change", (e) => {
  let valor = e.target.value

  if(valor.length < 10){
    assuntoHelper.innerText = "O assunto deve ter no minímo 10 caracteres.";
    estilizarInputIncorreto(assuntoInput, assuntoHelper);
    inputsCorretos.assunto = false
  }else{
    estilizarInputCorreto(assuntoInput, assuntoHelper);
    inputsCorretos.assunto = true
  }
})

// ---------- VALIDAÇÃO mensagem ---------- //
let mensagemInput = document.getElementById("mensagem");
let mensagemLabel = document.querySelector('label[for="mensagem"]');
let mensagemHelper = document.getElementById("mensagem-helper");

togglePopup(mensagemInput, mensagemLabel)

// Validar valor do input
mensagemInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 50){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    mensagemHelper.innerText = "Seu mensagem precisa ter 50 ou mais caracteres";
    estilizarInputIncorreto(mensagemInput, mensagemHelper)
    inputsCorretos.mensagem = false
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(mensagemInput, mensagemHelper);
    inputsCorretos.mensagem = true
  }
})

// ---------- EVITAR O ENVIO DO FORMULÁRIO ---------- //
let btnSubmit = document.querySelector('input[type="submit"]');
let inputsCorretos = {
  nome: false,
  email : false,
  telefone: false,
  assunto : false,
  mensagem : false
}

btnSubmit.addEventListener("click", (e)=>{
  if(inputsCorretos.nome == false ||
    inputsCorretos.email == false ||
    inputsCorretos.telefone == false ||
    inputsCorretos.assunto == false ||
    inputsCorretos.mensagem == false){
    e.preventDefault();
    alert("Os campos obrigatórios precisam ser preenchidos corretamente.")
  }else{
    alert("Formulário enviado com sucesso!")
  }
})