/* Função de validação do cadastro de email */

document.getElementById("botao").addEventListener("click", validaContato);

function validaContato() {
  let nome = document.getElementById("username").value;
  let email = document.getElementById("email").value;

  /* Validação de formato do email com regex */
  function validaEmail(email) {
    var re = new RegExp(
      /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/
    );
    return re.test(email);
  }

  if (nome == "") {
    alert("Qual é o seu nome?");
    document.getElementById("username").focus();
    return;
  }
  if (email == "" || !validaEmail(email)) {
    alert("Informe seu email para saber das novidades! ;)");
    document.getElementById("email").focus();
    return false;
  } else {
    alert("Formulário preenchido com os dados abaixo: \nNome: " + nome + "\nEmail: " + email);
  }
}

