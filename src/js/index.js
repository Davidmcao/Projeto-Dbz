// Seleciona todos os botões e personagens
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

// Função para remover a seleção do botão atual
function desmarcarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }
}

// Função para marcar o novo botão selecionado
function marcarBotaoSelecionado(botao) {
  botao.classList.add("selecionado");
}

// Função para remover o personagem atualmente selecionado
function desmarcarPersonagemSelecionado() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  if (personagemSelecionado) {
    personagemSelecionado.classList.remove("selecionado");
  }
}

// Função para marcar o personagem correspondente ao botão clicado
function marcarPersonagemSelecionado(indice) {
  personagens[indice].classList.add("selecionado");
}

// Função principal que lida com o clique no botão
function configurarEventoClick(botao, indice) {
  botao.addEventListener("click", () => {
    desmarcarBotaoSelecionado();             // Remove botão selecionado anterior
    marcarBotaoSelecionado(botao);           // Marca o botão clicado

    desmarcarPersonagemSelecionado();        // Remove personagem selecionado anterior
    marcarPersonagemSelecionado(indice);     // Exibe o personagem correspondente ao botão
  });
}

// Percorre todos os botões e associa o evento de clique
botoes.forEach((botao, indice) => {
  configurarEventoClick(botao, indice);
});
