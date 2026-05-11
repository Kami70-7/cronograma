const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    botoes.forEach((btn) => btn.classList.remove("ativo"));
    abas.forEach((aba) => aba.classList.remove("ativo"));

    botao.classList.add("ativo");
    abas[index].classList.add("ativo");
  });
});
