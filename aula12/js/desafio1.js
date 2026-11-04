const formLogin = document.querySelector("#form-login");
const campoUsuario = document.querySelector("#usuario");
const campoSenha = document.querySelector("#senha");
const mensagem = document.querySelector("#mensagem");
const areaLogin = document.querySelector("#area-login");
const areaProtegida = document.querySelector("#area-protegida");

formLogin.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (campoUsuario.value.trim() === "aluno" && campoSenha.value === "senac123") {
    mensagem.textContent = "";
    areaLogin.hidden = true;
    areaProtegida.hidden = false;
    areaProtegida.querySelector("button").focus();
    return;
  }

  mensagem.textContent = "Usuário ou senha incorretos. Tente novamente.";
  campoSenha.value = "";
  campoSenha.focus();
});

document.querySelector("#botao-sair").addEventListener("click", () => {
  areaProtegida.hidden = true;
  areaLogin.hidden = false;
  formLogin.reset();
  campoUsuario.focus();
});
