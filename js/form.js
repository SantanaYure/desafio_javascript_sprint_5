// form.js

function Post(form) {
  event.preventDefault(); // evita recarregar a página

  const nome = form.nome.value.trim();
  const sobrenome = form.sobrenome.value.trim();
  const email = form.email.value.trim();
  const telefone = form.telefone.value.trim();
  const cpf = form.cpf.value.trim();
  const contato = form.contato.value;

  // Validação simples (pode ser expandida)
  if (!nome || !sobrenome || !email || !telefone || !cpf || contato === "COMO DESEJA SER CONTATADO") {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Simula o envio exibindo no console
  console.log("Dados enviados:");
  console.log("Nome:", nome);
  console.log("Sobrenome:", sobrenome);
  console.log("Email:", email);
  console.log("Telefone:", telefone);
  console.log("CPF:", cpf);
  console.log("Forma de contato:", contato);

  alert("Obrigado, seus dados foram enviados com sucesso!");

  form.reset(); // limpa os campos
}
